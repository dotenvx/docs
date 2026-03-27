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

function isLinkActive(link, pathname) {
  if (link.href === pathname) {
    return true
  }

  return (link.links ?? []).some((childLink) => childLink.href === pathname)
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
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.href ? (
          <a href={group.href}>{group.title}</a>
        ) : (
          <span>{group.title}</span>
        )}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={isLinkActive(link, router.pathname)}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {isLinkActive(link, router.pathname) && (link.links?.length ?? 0) > 0 && (
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
                    {link.links.map((childLink) => (
                      <li key={childLink.href}>
                        <NavLink
                          href={childLink.href}
                          isAnchorLink
                          active={childLink.href === router.pathname}
                        >
                          {childLink.title}
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
    title: 'Documentation',
    href: '/docs',
    links: [
      { title: 'Install', href: '/docs/install' },
      {
        title: 'Quickstart',
        href: '/docs/quickstart',
        links: [
          { title: 'Node.js', href: '/docs/languages/nodejs' },
          { title: 'PHP', href: '/docs/languages/php' },
          { title: 'Ruby', href: '/docs/languages/ruby' },
          { title: 'Python', href: '/docs/languages/python' },
          { title: 'Go', href: '/docs/languages/go' },
          { title: 'Rust', href: '/docs/languages/rust' },
          { title: 'Java', href: '/docs/languages/java' },
          { title: '.NET', href: '/docs/languages/dotnet' },
        ],
      },
      { title: 'Advanced', href: '/docs/advanced' },
      { title: 'Ops ⛨', href: '/docs/ops' },
    ]
  },
  {
    title: 'Quickstart',
    href: '/docs/quickstart',
    links: [
      { title: 'Node.js', href: '/docs/languages/nodejs' },
      { title: 'PHP', href: '/docs/languages/php' },
      { title: 'Ruby', href: '/docs/languages/ruby' },
      { title: 'Python', href: '/docs/languages/python' },
      { title: 'Go', href: '/docs/languages/go' },
      { title: 'Rust', href: '/docs/languages/rust' },
      { title: 'Java', href: '/docs/languages/java' },
      { title: '.NET', href: '/docs/languages/dotnet' },
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
  {
    title: 'Guides',
    href: '/docs/guides',
    links: [
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
