import { createLoader } from 'simple-functional-loader'
import glob from 'fast-glob'
import { remark } from 'remark'
import remarkMdx from 'remark-mdx'
import * as url from 'url'
import * as path from 'path'
import * as fs from 'fs'
import { visit, SKIP } from 'unist-util-visit'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { toString } from 'mdast-util-to-string'
import { filter } from 'unist-util-filter'

const __filename = url.fileURLToPath(import.meta.url)
const processor = remark().use(remarkMdx).use(extractSections)
const slugify = slugifyWithCounter()

function isObjectExpression(node) {
  return (
    node.type === 'mdxTextExpression' &&
    node.data?.estree?.body?.[0]?.expression?.type === 'ObjectExpression'
  )
}

function excludeObjectExpressions(tree) {
  return filter(tree, (node) => !isObjectExpression(node))
}

function extractSections() {
  return (tree, { sections }) => {
    slugify.reset()

    visit(tree, (node) => {
      if (node.type === 'heading' || node.type === 'paragraph') {
        let content = toString(excludeObjectExpressions(node))
        if (node.type === 'heading' && node.depth <= 2) {
          let hash = node.depth === 1 ? null : slugify(content)
          sections.push([content, hash, []])
        } else {
          sections.at(-1)?.[2].push(content)
        }
        return SKIP
      }
    })
  }
}

export default function (nextConfig = {}) {
  let cache = new Map()

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: __filename,
        use: [
          createLoader(function () {
            let pagesDir = path.resolve('./src/pages')
            this.addContextDependency(pagesDir)

            let files = glob.sync('**/*.mdx', {
              cwd: pagesDir,
              ignore: ['docs/frameworks/**'],
            })
            let data = files.map((file) => {
              let url =
                file === 'index.mdx' ? '/' : `/${file.replace(/\.mdx$/, '')}`
              let mdx = fs.readFileSync(path.join(pagesDir, file), 'utf8')

              let sections = []

              if (cache.get(file)?.[0] === mdx) {
                sections = cache.get(file)[1]
              } else {
                let vfile = { value: mdx, sections }
                processor.runSync(processor.parse(vfile), vfile)
                cache.set(file, [mdx, sections])
              }

              return { url, sections }
            })

            // When this file is imported within the application
            // the following module is loaded:
            return `
              import FlexSearch from 'flexsearch'

              let sectionIndex = new FlexSearch.Document({
                tokenize: 'full',
                document: {
                  id: 'url',
                  index: [
                    { field: 'title', tokenize: 'full' },
                    { field: 'content', tokenize: 'full' },
                  ],
                  store: ['title', 'pageTitle', 'pageUrl'],
                },
                context: {
                  resolution: 9,
                  depth: 2,
                  bidirectional: true
                }
              })

              let data = ${JSON.stringify(data)}

              for (let { url, sections } of data) {
                for (let [title, hash, content] of sections) {
                  let finalUrl = url
                  if (finalUrl.endsWith('/index')) {
                    finalUrl = finalUrl.replace('/index', '')
                  }
                  if (hash) {
                    finalUrl += '#' + hash
                  }
                  sectionIndex.add({
                    url: finalUrl,
                    title,
                    content: [title, ...content].join('\\n'),
                    pageTitle: hash ? sections[0][0] : undefined,
                    pageUrl: finalUrl,
                  })
                }
              }

              export function search(query, options = {}) {
                let result = sectionIndex.search(query, {
                  ...options,
                  enrich: true,
                })
                if (result.length === 0) {
                  return []
                }

                let limit = options.limit ?? Infinity
                let items = []
                let seen = new Set()

                // FlexSearch returns one result group per indexed field. Titles are
                // indexed first, so exact page and section names outrank incidental
                // mentions in body copy.
                for (let group of result) {
                  for (let item of group.result) {
                    if (!seen.has(item.id)) {
                      seen.add(item.id)
                      items.push(item)
                    }
                  }
                }

                return items.slice(0, limit).map((item) => ({
                  url: item.id,
                  title: item.doc.title,
                  pageTitle: item.doc.pageTitle,
                  pageUrl: item.doc.pageUrl,
                }))
              }
            `
          }),
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}
