import nextMDX from '@next/mdx'
import withSearch from './src/mdx/search.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { recmaPlugins } from './src/mdx/recma.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: ''
  },
  assetPrefix: './'
  //output: 'export', // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  //images: {
  //  unoptimized: true, // https://stackoverflow.com/questions/75785972/nextjs-export-folder-out-doesnt-have-index-html
  //},
  //reactStrictMode: true,
  //pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  //experimental: {
  //  scrollRestoration: true,
  //},
  //exportPathMap: function () {
  //  return {
  //    '/docs/libraries.html': { page: '/docs' },
  //    '/docs/libraries': { page: '/docs' },
  //  };
  //},
}

export default withSearch(withMDX(nextConfig))
