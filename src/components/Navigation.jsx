import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li className="">
      <Link
        href={href}
        className="block py-4 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-yellow-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  )

  let isActiveGroup =
    group.links.findIndex((link) => link.href === router.pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.href ? (
          <a href={group.href}>{group.title}</a>
        ) : (
          <span>{group.title}</span>
        )}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Quickstart',
    href: '/docs/quickstart',
    links: [
      { title: 'Quickstart', href: '/docs/quickstart' },
      { title: 'Run Anywhere', href: '/docs/quickstart/run' },
      { title: 'Multiple Environments', href: '/docs/quickstart/environments' },
      { title: 'Encryption', href: '/docs/quickstart/encryption' },
      { title: 'Install', href: '/docs/install' },
    ]
  },
  {
    title: 'Languages',
    // href: '/docs/platforms',
    links: [
      { title: 'Node.js', href: '/docs/languages/nodejs' },
      { title: 'Python', href: '/docs/languages/python' },
      { title: 'PHP', href: '/docs/languages/php' },
      { title: 'Ruby', href: '/docs/languages/ruby' },
      { title: 'Go', href: '/docs/languages/go' },
      { title: 'Rust', href: '/docs/languages/rust' },
    ]
  },
  {
    title: 'Frameworks',
    // href: '/docs/platforms',
    links: [
      { title: 'Astro', href: '/docs/frameworks/astro' },
      { title: 'Express', href: '/docs/frameworks/express' },
      { title: 'Next', href: '/docs/frameworks/next' },
      { title: 'Remix', href: '/docs/frameworks/remix' },
      { title: 'Flask', href: '/docs/frameworks/flask' },
      { title: 'Sinatra', href: '/docs/frameworks/sinatra' },
      { title: 'Echo', href: '/docs/frameworks/echo' },
      { title: 'Rocket', href: '/docs/frameworks/rocket' },
    ]
  },
  {
    title: 'Platforms',
    // href: '/docs/platforms',
    links: [
      { title: 'Digital Ocean', href: '/docs/platforms/digital-ocean' },
      { title: 'Docker', href: '/docs/platforms/docker' },
      { title: 'Fly', href: '/docs/platforms/fly' },
      { title: 'Heroku', href: '/docs/platforms/heroku' },
      { title: 'Netlify', href: '/docs/platforms/netlify' },
      { title: 'Railway', href: '/docs/platforms/railway' },
      { title: 'Render', href: '/docs/platforms/render' },
      { title: 'Vercel', href: '/docs/platforms/vercel' },
    ]
  },
  {
    title: 'CI/CDs',
    // href: '/docs/platforms',
    links: [
      { title: 'GitHub Actions', href: '/docs/cis/github-actions' },
    ]
  },
  {
    title: 'Package Managers',
    links: [
      { title: 'npm', href: '/docs/package-managers/npm' },
      { title: 'pnpm', href: '/docs/package-managers/pnpm' },
    ]
  },
  {
    title: 'Process Managers',
    links: [
      { title: 'pm2', href: '/docs/process-managers/pm2' },
    ]
  },
  {
    title: 'Monorepos',
    links: [
      { title: 'Nx', href: '/docs/monorepos/nx' },
      { title: 'Turborepo', href: '/docs/monorepos/turborepo' },
    ]
  },
  {
    title: 'More Features',
    links: [
      { title: 'genexample', href: '/docs/features/genexample' },
      { title: 'gitignore', href: '/docs/features/gitignore' },
      { title: 'prebuild', href: '/docs/features/prebuild' },
      { title: 'precommit', href: '/docs/features/precommit' },
      { title: 'scan', href: '/docs/features/scan' },
      { title: 'get', href: '/docs/features/get' },
      { title: 'set', href: '/docs/features/set' },
      { title: 'ls', href: '/docs/features/ls' },
      { title: 'status', href: '/docs/features/status' },
      { title: 'settings', href: '/docs/features/settings' },
    ]
  },
]

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            href={group.href}
            group={group}
            className={groupIndex === 0 && 'md:mt-0'}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
