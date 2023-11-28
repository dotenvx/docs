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
    title: 'Documentation',
    href: '/docs',
    links: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quickstart', href: '/docs/quickstart' },
      { title: 'CLI', href: '/docs/dotenv-vault' },
      { title: 'Security', href: '/docs/security' },
      { title: 'Features', href: '/docs/features' },
      { title: 'Addons', href: '/docs/addons' },
    ],
  },
  {
    title: 'Quickstart Guides',
    href: '/docs/quickstart',
    links: [
      { title: 'Sync', href: '/docs/quickstart/sync' },
      { title: 'Environments', href: '/docs/quickstart/environments' },
      { title: 'Load', href: '/docs/quickstart/development' },
      { title: 'Deploy', href: '/docs/quickstart/deploy' },
    ],
  },
  {
    title: 'Languages', href: '/docs#languages',
    links: [
      { title: 'Node.js', href: '/docs/languages/nodejs' },
      { title: 'Python', href: '/docs/languages/python' },
      { title: 'Ruby', href: '/docs/languages/ruby' },
      { title: 'Go', href: '/docs/languages/go' },
      { title: 'PHP', href: '/docs/languages/php' },
      { title: 'Rust', href: '/docs/languages/rust' },
    ],
  },
  {
    title: 'Frameworks', href: '/docs#frameworks',
    links: [
      { title: 'Angular', href: '/docs/frameworks/angular/vercel' },
      { title: 'Astro', href: '/docs/frameworks/astro/netlify' },
      { title: 'Express', href: '/docs/frameworks/express' },
      { title: 'Laravel', href: '/docs/frameworks/laravel' },
      { title: 'Gatsby', href: '/docs/frameworks/gatsby' },
      { title: 'Nest.js', href: '/docs/frameworks/nestjs/heroku' },
      { title: 'Next.js', href: '/docs/frameworks/nextjs' },
      { title: 'Nuxt.js', href: '/docs/frameworks/nuxtjs' },
      { title: 'PM2', href: '/docs/frameworks/pm2/heroku' },
      { title: 'Remix', href: '/docs/frameworks/remix' },
      { title: 'Serverless', href: '/docs/frameworks/serverless/aws-lambda' },
      { title: 'SvelteKit', href: '/docs/frameworks/svelte-kit/vercel' },
      { title: 'Turborepo', href: '/docs/frameworks/turborepo/vercel' },
      { title: 'Vite', href: '/docs/frameworks/vite/vercel' },
      { title: 'FastAPI', href: '/docs/frameworks/fastapi/heroku' },
      { title: 'Flask', href: '/docs/frameworks/flask/heroku' },
      { title: 'Rails', href: '/docs/frameworks/rails' },
      { title: 'Sinatra', href: '/docs/frameworks/sinatra/heroku' },
      { title: 'Rocket', href: '/docs/frameworks/rocket-rs/heroku' },
    ],
  },
  {
    title: 'Platforms', href: '/docs#platforms',
    links: [
      { title: 'AWS Lambda', href: '/docs/platforms/aws-lambda' },
      { title: 'Cloud66', href: '/docs/languages/nodejs/cloud66' },
      { title: 'Digital Ocean', href: '/docs/languages/nodejs/digital-ocean' },
      { title: 'Docker', href: '/docs/platforms/docker' },
      { title: 'Edgio', href: '/docs/frameworks/nuxtjs/edgio' },
      { title: 'Fly', href: '/docs/platforms/fly' },
      { title: 'Gatsby Edge', href: '/docs/frameworks/gatsby/gatsby-edge' },
      { title: 'Heroku', href: '/docs/platforms/heroku' },
      { title: 'Kamal', href: '/docs/platforms/kamal' },
      { title: 'Laravel Forge', href: '/docs/frameworks/laravel/laravel-forge' },
      { title: 'Netlify', href: '/docs/platforms/netlify' },
      { title: 'Northflank', href: '/docs/languages/nodejs/northflank' },
      { title: 'Railway', href: '/docs/languages/nodejs/railway' },
      { title: 'Render', href: '/docs/languages/nodejs/render' },
      { title: 'Vercel', href: '/docs/platforms/vercel' },
    ],
  },
  {
    title: 'CI/CDs', href: '/docs#cis',
    links: [
      { title: 'AWS Beanstalk', href: '/docs/languages/nodejs/aws-beanstalk' },
      { title: 'Bitbucket', href: '/docs/languages/nodejs/bitbucket' },
      { title: 'Buddy', href: '/docs/languages/nodejs/buddy' },
      { title: 'CircleCI', href: '/docs/cis/circleci' },
      { title: 'Dagger', href: '/docs/languages/nodejs/dagger' },
      { title: 'GitHub Actions', href: '/docs/cis/github-actions' },
      { title: 'Gitlab CI/CD', href: '/docs/languages/nodejs/gitlab-ci' },
      { title: 'Google Cloud Build', href: '/docs/cis/google-cloud-build' },
      { title: 'Jenkins', href: '/docs/languages/nodejs/jenkins' },
      { title: 'Pulumi', href: '/docs/languages/nodejs/pulumi' },
      { title: 'Travis', href: '/docs/languages/nodejs/travis-ci' },
    ]
  },
  {
    title: 'CLI', href: '/docs/dotenv-vault',
    links: [
      { title: 'new', href: '/docs/dotenv-vault/new' },
      { title: 'login', href: '/docs/dotenv-vault/login' },
      { title: 'logout', href: '/docs/dotenv-vault/logout' },
      { title: 'open', href: '/docs/dotenv-vault/open' },
      { title: 'push', href: '/docs/dotenv-vault/push' },
      { title: 'pull', href: '/docs/dotenv-vault/pull' },
      { title: 'build', href: '/docs/dotenv-vault/build' },
      { title: 'keys', href: '/docs/dotenv-vault/keys' },
      { title: 'rotatekey', href: '/docs/dotenv-vault/rotatekey' },
      { title: 'versions', href: '/docs/dotenv-vault/versions' },
      { title: 'whoami', href: '/docs/dotenv-vault/whoami' },
      { title: 'status', href: '/docs/dotenv-vault/status' },
      { title: 'help', href: '/docs/dotenv-vault/help' },
    ],
  },
  {
    title: 'Security', href: '/docs/security',
    links: [
      { title: '.env', href: '/docs/security/env' },
      { title: '.env.vault', href: '/docs/security/env-vault' },
      { title: '.env.me', href: '/docs/security/env-me' },
      { title: 'DOTENV_KEY', href: '/docs/security/dotenv-key' },
      { title: 'IT Tokens', href: '/docs/security/env-it' },
      { title: 'Vault', href: '/docs/security/vault' },
    ],
  },
  {
    title: 'Features', href: '/docs/features',
    links: [
      { title: 'Sync .env files', href: '/docs/features/sync' },
      { title: 'Unlimited projects', href: '/docs/features/unlimited-projects' },
      { title: 'Teammates', href: '/docs/tutorials/teammates' },
      { title: 'Multiple environments', href: '/docs/features/environments' },
      { title: 'Compare environments', href: '/docs/features/compare-environments' },
      { title: 'Encrypted deploys', href: '/docs/features/encrypted-deploys' },
      { title: 'CLI', href: '/docs/dotenv-vault' },
      { title: 'Add-ons', href: '/docs/addons' },
      { title: 'VSCode', href: 'https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode' },
      { title: 'Personal secrets', href: '/docs/features/personal-environment-variables' },
      { title: 'Custom environments', href: '/docs/features/custom-environments' },
      { title: 'Access controls', href: '/docs/features/access-controls' },
      { title: 'Version history', href: '/docs/features/version-history' },
    ],
  },
  {
    title: 'Add-ons',
    links: [
      { title: 'Overview', href: '/docs/addons' },
      { title: 'VSCode', href: 'https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode' },
      { title: 'External Share', href: '/docs/addons/external' },
      { title: 'GitHub Build', href: '/docs/addons/github' },
      { title: 'Slack Notifications', href: '/docs/addons/slack' },
      { title: 'Sync to AWS Parameter Store', href: '/docs/addons/aws-parameter-store' },
      { title: 'Sync to AWS Secrets', href: '/docs/addons/aws-secrets' },
      { title: 'Sync to Heroku', href: '/docs/addons/heroku' },
      { title: 'Sync to Vercel', href: '/docs/addons/vercel' },
    ],
  },
  {
    title: 'Tutorials',
    links: [
      { title: 'Sync .env files', href: '/docs/tutorials/sync' },
      { title: 'Manage environments', href: '/docs/tutorials/environments' },
      { title: 'Integrate everywhere', href: '/docs/tutorials/integrations' },
      { title: 'Adding teammates', href: '/docs/tutorials/teammates' },
      { title: 'Managing access', href: '/docs/tutorials/access' },
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
          <Button href="https://vault.dotenv.org" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
