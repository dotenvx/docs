import { Children } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

function getPanelTitle(child) {
  return child?.props?.title ?? 'Tab'
}

function RenderableTabsHeader({ title, children, selectedIndex }) {
  let hasTabs = Children.count(children) > 1

  if (!title && !hasTabs) {
    return null
  }

  return (
    <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
      {title && (
        <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {title}
        </h3>
      )}
      {hasTabs && (
        <Tab.List className="-mb-px flex gap-4 text-xs font-medium">
          {Children.map(children, (child, childIndex) => (
            <Tab
              className={clsx(
                'border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none',
                childIndex === selectedIndex
                  ? 'border-yellow-500 text-yellow-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-300'
              )}
            >
              {getPanelTitle(child)}
            </Tab>
          ))}
        </Tab.List>
      )}
    </div>
  )
}

function RenderableTabsPanels({ children, variant }) {
  let panelClassName =
    variant === 'code'
      ? 'text-zinc-200 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:text-yellow-400 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-yellow-300 [&_img]:my-2 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:rounded-none [&_pre]:bg-transparent [&_pre]:p-4 [&_pre]:text-xs'
      : 'p-4 text-sm text-zinc-200 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:text-yellow-400 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-yellow-300 [&_img]:my-2 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-black/30 [&_pre]:p-3'

  return (
    <Tab.Panels>
      {Children.map(children, (child) => (
        <Tab.Panel>
          <div className={panelClassName}>
            {child.props.children}
          </div>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  )
}

export function RenderableTabs({ children, title, variant = 'default' }) {
  let hasTabs = Children.count(children) > 1

  if (!hasTabs) {
    return (
      <div className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
        <div className="p-4 text-sm text-zinc-200">{children}</div>
      </div>
    )
  }

  return (
    <Tab.Group as="div" className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
      {({ selectedIndex }) => (
        <>
          <RenderableTabsHeader title={title} selectedIndex={selectedIndex}>
            {children}
          </RenderableTabsHeader>
          <RenderableTabsPanels variant={variant}>
            {children}
          </RenderableTabsPanels>
        </>
      )}
    </Tab.Group>
  )
}

export function RenderableTab({ children }) {
  return children
}
