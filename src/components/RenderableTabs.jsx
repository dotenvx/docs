import { Children } from 'react'
import { Tab } from '@headlessui/react'

import { useTabGroupProps } from '@/components/Code'

function getPanelTitle(child) {
  return child?.props?.title ?? 'Tab'
}

export function RenderableTabs({ children, title, variant = 'default' }) {
  let childArray = Children.toArray(children).filter(Boolean)
  let hasTabs = childArray.length > 1
  let tabTitles = childArray.map((child) => getPanelTitle(child))
  let tabGroupProps = useTabGroupProps(tabTitles)

  let panelClassName =
    variant === 'code'
      ? 'design-codeblock [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:text-[color:var(--design-body)] [&_a]:underline [&_img]:my-2 [&_img]:h-auto [&_img]:max-w-full [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:text-compact'
      : 'p-4 text-compact text-[color:var(--design-body)] [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:text-[color:var(--design-body)] [&_a]:underline [&_img]:my-2 [&_img]:h-auto [&_img]:max-w-full'

  if (!hasTabs) {
    return (
      <div className="not-prose my-6">
        {title ? <p className="design-list-title mb-3">{title}</p> : null}
        <div className={panelClassName}>{childArray[0]}</div>
      </div>
    )
  }

  return (
    <Tab.Group
      {...tabGroupProps}
      className="design-choice design-choice--code not-prose my-6"
      style={{ '--design-choice-count': childArray.length }}
    >
      {title ? (
        <p className="design-list-title border-b border-[color:var(--design-line)] px-4 py-3">
          {title}
        </p>
      ) : null}
      <div className="design-choice-current">
        <Tab.Panels>
          {childArray.map((child, index) => (
            <Tab.Panel key={tabTitles[index]} className="design-choice-code-panel">
              <div className={panelClassName}>{child.props.children}</div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
      <Tab.List className="design-choice-options" aria-label="Options">
        {childArray.map((child, index) => (
          <Tab
            key={tabTitles[index]}
            className="design-choice-option focus:outline-none"
          >
            {getPanelTitle(child)}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  )
}

export function RenderableTab({ children }) {
  return children
}
