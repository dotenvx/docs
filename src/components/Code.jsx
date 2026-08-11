import {
  Children,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { create } from 'zustand'

const languageNames = {
  js: 'JavaScript',
  ts: 'TypeScript',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  go: 'Go',
}

function getPanelTitle(props = {}) {
  let { title, language } = props
  return title ?? languageNames[language] ?? 'Code'
}

function countLines(text) {
  if (!text) return 0
  return String(text).replace(/\n$/, '').split('\n').length || 0
}

/** Visible lines in a CodeGroup panel — not the clipboard `code` prop (often 1 line). */
function countDisplayLines(child) {
  let content = child?.props?.children
  let text = ''

  if (typeof content === 'string') {
    text = content
  } else if (Array.isArray(content)) {
    text = content
      .map((part) => {
        if (typeof part === 'string') return part
        if (typeof part?.props?.children === 'string') return part.props.children
        return ''
      })
      .join('')
  } else if (typeof content?.props?.children === 'string') {
    text = content.props.children
  }

  text = text
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/div>|<\/p>|<\/tr>/gi, '\n')
    .replace(/<[^>]+>/g, '')

  return Math.max(countLines(text), countLines(child?.props?.code), 1)
}

function DesignCopyButton({ code, wrapRef }) {
  let [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    let timeout = setTimeout(() => setCopied(false), 1100)
    return () => clearTimeout(timeout)
  }, [copied])

  useEffect(() => {
    let wrap = wrapRef?.current
    if (!wrap) return
    wrap.classList.toggle('is-copied', copied)
  }, [copied, wrapRef])

  return (
    <button
      type="button"
      className="design-codeblock-copy"
      aria-label="Copy code"
      onClick={() => {
        window.navigator.clipboard.writeText(code ?? '').then(() => {
          setCopied(true)
        })
      }}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function DesignCodeBlock({ code, children, copy = true }) {
  let wrapRef = useRef(null)
  let child = Children.only(children)
  let copyText = child.props.code ?? code ?? ''

  if (!copy) {
    return <pre className="design-codeblock">{child}</pre>
  }

  return (
    <div className="design-codeblock-wrap" ref={wrapRef}>
      <DesignCopyButton code={copyText} wrapRef={wrapRef} />
      <pre className="design-codeblock">{child}</pre>
    </div>
  )
}

function usePreventLayoutShift() {
  let positionRef = useRef()
  let rafRef = useRef()

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return {
    positionRef,
    preventLayoutShift(callback) {
      let initialTop = positionRef.current.getBoundingClientRect().top

      callback()

      rafRef.current = window.requestAnimationFrame(() => {
        let newTop = positionRef.current.getBoundingClientRect().top
        window.scrollBy(0, newTop - initialTop)
      })
    },
  }
}

const usePreferredLanguageStore = create((set) => ({
  preferredLanguages: [],
  addPreferredLanguage: (language) =>
    set((state) => ({
      preferredLanguages: [
        ...state.preferredLanguages.filter(
          (preferredLanguage) => preferredLanguage !== language
        ),
        language,
      ],
    })),
}))

export function useTabGroupProps(availableLanguages) {
  let { preferredLanguages, addPreferredLanguage } = usePreferredLanguageStore()
  let [selectedIndex, setSelectedIndex] = useState(0)
  let activeLanguage = [...availableLanguages].sort(
    (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
  )[0]
  let languageIndex = availableLanguages.indexOf(activeLanguage)
  let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex
  if (newSelectedIndex !== selectedIndex) {
    setSelectedIndex(newSelectedIndex)
  }

  let { positionRef, preventLayoutShift } = usePreventLayoutShift()

  return {
    as: 'div',
    ref: positionRef,
    selectedIndex,
    onChange: (newSelectedIndex) => {
      preventLayoutShift(() =>
        addPreferredLanguage(availableLanguages[newSelectedIndex])
      )
    },
  }
}

const CodeGroupContext = createContext(false)

export function CodeGroup({ children, title, ...props }) {
  let childArray = Children.toArray(children).filter(
    (child) => child?.props != null
  )
  let languages = childArray.map((child) => getPanelTitle(child.props))
  let tabGroupProps = useTabGroupProps(languages)
  let hasTabs = childArray.length > 1
  let lines = Math.max(...childArray.map((child) => countDisplayLines(child)), 1)

  if (!hasTabs) {
    return (
      <CodeGroupContext.Provider value={true}>
        <div className="not-prose my-6">
          {title ? <p className="design-list-title mb-3">{title}</p> : null}
          <DesignCodeBlock {...props}>{childArray[0]}</DesignCodeBlock>
        </div>
      </CodeGroupContext.Provider>
    )
  }

  return (
    <CodeGroupContext.Provider value={true}>
      <Tab.Group
        {...tabGroupProps}
        className="design-choice design-choice--code has-lines not-prose my-6"
        style={{
          '--design-choice-count': childArray.length,
          '--design-choice-code-lines': lines,
        }}
      >
        {title ? (
          <p className="design-list-title border-b border-[color:var(--design-line)] px-4 py-3">
            {title}
          </p>
        ) : null}
        <div className="design-choice-current">
          <Tab.Panels>
            {childArray.map((child, index) => (
              <Tab.Panel key={languages[index]} className="design-choice-code-panel">
                <DesignCodeBlock {...props}>{child}</DesignCodeBlock>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
        <Tab.List className="design-choice-options" aria-label="Code options">
          {childArray.map((child, index) => (
            <Tab
              key={languages[index]}
              className="design-choice-option focus:outline-none"
            >
              {getPanelTitle(child.props)}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </CodeGroupContext.Provider>
  )
}

export function Code({ children, ...props }) {
  let isGrouped = useContext(CodeGroupContext)

  if (isGrouped) {
    if (typeof children === 'string') {
      return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />
    }

    return <code {...props}>{children}</code>
  }

  return <code {...props}>{children}</code>
}

export function Pre({ children, ...props }) {
  let isGrouped = useContext(CodeGroupContext)

  if (isGrouped) {
    return children
  }

  return <CodeGroup {...props}>{children}</CodeGroup>
}
