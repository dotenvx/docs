import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { Tag } from '@/components/Tag'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li className="">
      <Link
        href={href}
        className="block rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-900/2.5 dark:text-zinc-400 dark:hover:bg-white/5"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, current, level = 0, children }) {
  let leftPaddingClass = {
    0: 'pl-2',
    1: 'pl-3',
    2: 'pl-3',
  }[level] ?? 'pl-10'

  return (
    <Link
      href={href}
      aria-current={current ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 rounded-md px-4 py-1 text-sm transition-colors',
        leftPaddingClass,
        current
          ? 'bg-zinc-900/5 text-zinc-900 dark:bg-white/10 dark:text-white'
          : active
            ? 'text-zinc-900 dark:text-white'
            : 'text-zinc-600 hover:bg-zinc-900/2.5 dark:text-zinc-400 dark:hover:bg-white/5'
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

function isLinkActive(link, pathname) {
  if (link.href === pathname) {
    return true
  }

  return (link.links ?? []).some((childLink) => isLinkActive(childLink, pathname))
}

function hasDescendantWithHref(link, href) {
  return (link.links ?? []).some(
    (childLink) => childLink.href === href || hasDescendantWithHref(childLink, href)
  )
}

function NavigationLinkItem({ link, pathname, level = 0 }) {
  let isActive = isLinkActive(link, pathname)
  // Only one item should be "current" (gets the persistent bg). If a parent and
  // child share the same href, prefer the deepest child.
  let isCurrent = link.href === pathname && !hasDescendantWithHref(link, pathname)

  return (
    <motion.li layout="position" className="relative">
      <NavLink href={link.href} active={isActive} current={isCurrent} level={level}>
        {link.title}
      </NavLink>
      <AnimatePresence mode="popLayout" initial={false}>
        {isActive && (link.links?.length ?? 0) > 0 && (
          <motion.ul
            role="list"
            className={clsx('space-y-[1.5px]', level === 0 && 'relative ml-2 pl-2')}
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
            {level === 0 && (
              <motion.div
                layout
                className="absolute inset-y-0 left-0 w-px bg-zinc-900/10 dark:bg-white/5"
              />
            )}
            {link.links.map((childLink) => (
              <NavigationLinkItem
                key={childLink.href}
                link={childLink}
                pathname={pathname}
                level={level + 1}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

function NavigationGroup({ group, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let router = useInitialValue(useRouter(), isInsideMobileNavigation)

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="pl-2 text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.href ? (
          <a href={group.href}>{group.title}</a>
        ) : (
          <span>{group.title}</span>
        )}
      </motion.h2>
      <div className="relative mt-3">
        <ul role="list" className="space-y-[1.5px] border-l border-transparent">
          {group.links.map((link) => (
            <NavigationLinkItem key={link.href} link={link} pathname={router.pathname} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Documentation',
    href: '/docs',
    links: [
      { title: 'Introduction', href: '/docs/introduction' },
    ]
  },
  {
    title: 'Quickstart',
    href: '/docs/quickstart',
    links: [
      {
        title: 'Node.js',
        href: '/docs/secrets-in-nodejs',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-nodejs' },
          { title: 'Express', href: '/docs/secrets-in-express' },
          { title: 'Astro', href: '/docs/secrets-in-astro' },
        ],
      },
      {
        title: 'Python',
        href: '/docs/secrets-in-python',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-python' },
        ],
      },
      {
        title: 'Ruby',
        href: '/docs/secrets-in-ruby',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-ruby' },
        ],
      },
    ]
  },
  {
    title: 'Guides',
    href: '/docs/guides',
    links: [
      { title: 'Install', href: '/docs/install' },
      { title: 'Basics', href: '/docs/quickstart' },
      { title: 'Advanced', href: '/docs/advanced' },
      { title: 'Quickstart: Run', href: '/docs/quickstart/run' },
      { title: 'Quickstart: Environments', href: '/docs/quickstart/environments' },
      { title: 'Quickstart: Encrypt', href: '/docs/quickstart/encryption' },
      { title: 'Quickstart: Deploy', href: '/docs/quickstart/deploy' },
      { title: 'Digital Ocean', href: '/docs/platforms/digital-ocean' },
      { title: 'Docker', href: '/docs/platforms/docker' },
      { title: 'Docker Compose', href: '/docs/platforms/docker-compose' },
      { title: 'Fly', href: '/docs/platforms/fly' },
      { title: 'GitHub Actions', href: '/docs/cis/github-actions' },
      { title: 'Heroku', href: '/docs/platforms/heroku' },
      { title: 'Netlify', href: '/docs/platforms/netlify' },
      { title: 'NPM', href: '/docs/package-managers/npm' },
      { title: 'Nx', href: '/docs/monorepos/nx' },
      { title: 'Render', href: '/docs/platforms/render' },
      { title: 'Railway', href: '/docs/platforms/railway' },
      { title: 'Trigger', href: '/docs/background-jobs/triggerdotdev' },
      { title: 'Turborepo', href: '/docs/monorepos/turborepo' },
      { title: 'Vercel', href: '/docs/platforms/vercel' },
      { title: 'Cloudflare', href: '/docs/platforms/cloudflare' },
      { title: 'More', href: '/docs/guides' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: '.env', href: '/docs/env-file' },
      { title: '.env.keys', href: '/docs/env-keys-file' },
      { title: 'Statistics', href: '/docs/stats' },
      { title: 'Deprecated', href: '/docs/deprecated' },
      { title: 'Chrome', href: 'https://dotenvx.com/chrome-extension' },
      { title: 'Heroku', href: 'https://github.com/dotenvx/heroku-buildpack-dotenvx' },
      { title: 'VSCode', href: 'https://dotenvx.com/vscode-extension' },
      { title: 'llms-full.txt', href: '/llms-full.txt' },
      { title: 'llms.txt', href: '/llms.txt' },
    ]
  },
  {
    title: 'Ops ⛨',
    href: '/docs/ops',
    links: [
      { title: 'Install', href: '/docs/ops/install' },
      { title: 'Basics', href: '/docs/ops/quickstart' },
      { title: 'Advanced', href: '/docs/ops/advanced' },
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
