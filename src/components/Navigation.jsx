import { useRef, useState } from 'react'
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

function NavLink({ href, tag, active, current, level = 0, target, rel, children }) {
  let leftPaddingClass = {
    0: 'pl-2',
    1: 'pl-3',
    2: 'pl-3',
  }[level] ?? 'pl-10'

  return (
    <Link
      href={href}
      aria-current={current ? 'page' : undefined}
      target={target}
      rel={rel}
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

const mobileTopLevelNavigation = [
  { title: 'Documentation', href: '/docs' },
  { title: 'CLI Reference', href: '/docs/cli' },
  { title: 'SDK Reference', href: '/docs/sdk' },
]

function getMobileTopLevelSelection(pathname) {
  if (pathname.startsWith('/docs/cli')) {
    return '/docs/cli'
  }

  if (pathname.startsWith('/docs/sdk')) {
    return '/docs/sdk'
  }

  return '/docs'
}

function getMobileTopLevelTitle(pathname) {
  return (
    mobileTopLevelNavigation.find((link) => link.href === getMobileTopLevelSelection(pathname))
      ?.title ?? 'Documentation'
  )
}

function NavigationLinkItem({ link, pathname, level = 0 }) {
  let isActive = isLinkActive(link, pathname)
  // Only one item should be "current" (gets the persistent bg). If a parent and
  // child share the same href, prefer the deepest child.
  let isCurrent = link.href === pathname && !hasDescendantWithHref(link, pathname)

  return (
    <motion.li layout="position" className="relative">
      <NavLink
        href={link.href}
        active={isActive}
        current={isCurrent}
        level={level}
        target={link.target}
        rel={link.rel}
      >
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

export const defaultNavigation = [
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
          { title: 'Next.js', href: '/docs/secrets-in-nextjs' },
          { title: 'Express', href: '/docs/secrets-in-express' },
          { title: 'Astro', href: '/docs/secrets-in-astro' },
          { title: 'Bun', href: '/docs/secrets-in-bun' },
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
        title: 'PHP',
        href: '/docs/secrets-in-php',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-php' },
        ],
      },
      {
        title: 'Ruby',
        href: '/docs/secrets-in-ruby',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-ruby' },
        ],
      },
      {
        title: 'Go',
        href: '/docs/secrets-in-go',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-go' },
        ],
      },
      {
        title: 'Rust',
        href: '/docs/secrets-in-rust',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-rust' },
        ],
      },
      {
        title: 'Java',
        href: '/docs/secrets-in-java',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-java' },
          { title: 'Kotlin', href: '/docs/secrets-in-kotlin' },
          { title: 'Clojure', href: '/docs/secrets-in-clojure' },
        ],
      },
      {
        title: '.NET',
        href: '/docs/secrets-in-dotnet',
        links: [
          { title: 'Introduction', href: '/docs/secrets-in-dotnet' },
        ],
      },
      {
        title: 'Other',
        href: '/docs/secrets-in-bash',
        links: [
          { title: 'Bash', href: '/docs/secrets-in-bash' },
          { title: 'Fish', href: '/docs/secrets-in-fish' },
          { title: 'Cron', href: '/docs/secrets-in-cron' },
        ],
      },
    ]
  },
  {
    title: 'Learn',
    href: '/docs/learn',
    links: [
      { title: 'Introduction', href: '/docs/learn' },
      { title: 'Install', href: '/docs/install' },
      { title: 'Basics', href: '/docs/quickstart' },
      {
        title: 'Platforms',
        href: '/docs/guides',
        links: [
          { title: 'Introduction', href: '/docs/guides' },
          { title: 'Cloudflare', href: '/docs/platforms/cloudflare' },
          { title: 'Digital Ocean', href: '/docs/platforms/digital-ocean' },
          { title: 'Docker', href: '/docs/platforms/docker' },
          { title: 'Docker Compose', href: '/docs/platforms/docker-compose' },
          { title: 'Fly', href: '/docs/platforms/fly' },
          { title: 'GitHub', href: '/docs/cis/github-actions' },
          { title: 'Heroku', href: '/docs/platforms/heroku' },
          { title: 'Netlify', href: '/docs/platforms/netlify' },
          { title: 'Render', href: '/docs/platforms/render' },
          { title: 'Railway', href: '/docs/platforms/railway' },
          { title: 'Vercel', href: '/docs/platforms/vercel' },
          { title: 'More', href: '/docs/guides' },
        ],
      },
      {
        title: 'Whitepaper ↗',
        href: '/dotenvx.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
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

export const cliNavigation = [
  {
    title: 'CLI Reference',
    href: '/docs/cli',
    links: [
      { title: 'Introduction', href: '/docs/cli/introduction' },
    ],
  },
  {
    title: 'Commands',
    links: [
      { title: 'run', href: '/docs/cli/run' },
      { title: 'get', href: '/docs/cli/get' },
      { title: 'set', href: '/docs/cli/set' },
      { title: 'encrypt', href: '/docs/cli/encrypt' },
      { title: 'decrypt', href: '/docs/cli/decrypt' },
      { title: 'rotate', href: '/docs/cli/rotate' },
      { title: 'keypair', href: '/docs/cli/keypair' },
    ],
  },
  {
    title: 'More',
    links: [
      { title: 'ls', href: '/docs/cli/ls' },
      { title: 'ext', href: '/docs/cli/ext' },
    ],
  }
]

export const sdkNavigation = [
  {
    title: 'SDK Reference',
    href: '/docs/sdk',
    links: [
      { title: 'Introduction', href: '/docs/sdk/introduction' },
    ],
  },
  {
    title: 'Methods',
    links: [
      { title: 'config', href: '/docs/sdk/config' },
      { title: 'parse', href: '/docs/sdk/parse' },
      { title: 'set', href: '/docs/sdk/set' },
      { title: 'get', href: '/docs/sdk/get' },
    ],
  },

]

export const navigation = defaultNavigation

function getNavigationForPath(pathname) {
  if (pathname.startsWith('/docs/cli')) {
    return cliNavigation
  }

  if (pathname.startsWith('/docs/sdk')) {
    return sdkNavigation
  }

  return defaultNavigation
}

export function Navigation(props) {
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let router = useInitialValue(useRouter(), isInsideMobileNavigation)
  let currentNavigation = getNavigationForPath(router.pathname)
  let mobileTopLevelSelection = getMobileTopLevelSelection(router.pathname)
  let [isMobileTopLevelOpen, setIsMobileTopLevelOpen] = useState(false)

  return (
    <nav {...props}>
      <ul role="list">
        {isInsideMobileNavigation && (
          <li className="md:mt-0 mb-3 border-b border-zinc-900/10 pb-4 dark:border-white/10">
            <label htmlFor="mobile-top-level-nav-trigger" className="sr-only">
              Top-level navigation
            </label>
            <div className="relative">
              <button
                id="mobile-top-level-nav-trigger"
                type="button"
                aria-expanded={isMobileTopLevelOpen}
                onClick={() => setIsMobileTopLevelOpen((open) => !open)}
                className="flex w-full items-center justify-between rounded-2xl border border-zinc-900/10 bg-zinc-50/60 px-4 py-3 text-left text-sm text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
              >
                <span>{getMobileTopLevelTitle(router.pathname)}</span>
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="h-4 w-4 stroke-zinc-700 dark:stroke-zinc-300"
                >
                  {isMobileTopLevelOpen ? (
                    <path
                      d="M4 9.5 8 5.5l4 4"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path
                      d="M4 6.5 8 10.5l4-4"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </button>
              {isMobileTopLevelOpen && (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-full z-30 mt-3 space-y-1 rounded-2xl border border-zinc-900/10 bg-zinc-50/95 p-2 shadow-lg dark:border-white/10 dark:bg-zinc-900/95"
                >
                  {mobileTopLevelNavigation.map((link) => {
                    let isCurrent = link.href === mobileTopLevelSelection

                    return (
                      <li key={link.href}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isCurrent}
                          onClick={() => {
                            setIsMobileTopLevelOpen(false)
                            router.push(link.href)
                          }}
                          className={clsx(
                            'flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-zinc-900/5 focus-visible:bg-zinc-900/5 dark:hover:bg-white/10 dark:focus-visible:bg-white/10',
                            isCurrent
                              ? 'font-semibold text-zinc-900 dark:text-white'
                              : 'text-zinc-700 dark:text-zinc-300'
                          )}
                        >
                          <span>{link.title}</span>
                          {isCurrent && (
                            <svg
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                              className="h-4 w-4 stroke-zinc-900 dark:stroke-zinc-100"
                            >
                              <path
                                d="m3.5 8.5 2.5 2.5 6-6"
                                fill="none"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </li>
        )}
        {currentNavigation.map((group, groupIndex) => (
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
