import { Fragment, forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Popover, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

import { Logo } from '@/components/Logo'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MobileSearch } from '@/components/Search'

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm leading-5 text-[color:var(--design-mid)] transition hover:text-[color:var(--design-ink)]"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-[var(--design-bg)] px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
          'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80'
      )}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-[color:var(--design-line)]'
        )}
      />
      <nav className="hidden lg:block">
        <ul role="list" className="flex items-center gap-8">
          <TopLevelNavItem href="/docs">
            <span>▦ Documentation</span>
          </TopLevelNavItem>
          <TopLevelNavItem href="/docs/cli">
            <span>❯ CLI Reference</span>
          </TopLevelNavItem>
          <TopLevelNavItem href="/docs/sdk">
            <span>ƒ SDK Reference</span>
          </TopLevelNavItem>
        </ul>
      </nav>
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-[1.8rem] w-[1.8rem] rounded-[0.05rem]" />
        </Link>
      </div>
        <div className="flex items-center gap-5">
        <div className="hidden md:block md:h-5 md:w-px md:bg-[color:var(--design-line)]" />
        <div className="flex gap-4">
          <MobileSearch />
        </div>
        <Popover className="relative md:hidden">
          <Popover.Button
            aria-label="More"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-xl leading-none text-[color:var(--design-mid)] hover:bg-[color:var(--design-hover)] hover:text-[color:var(--design-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--design-mark)] ease-in duration-150"
          >
            ⋮
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel className="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-lg bg-[var(--design-menu-bg)] p-2 shadow-lg ring-1 ring-[color:var(--design-line)]">
              <div className="flex flex-col items-center gap-1">
                <Link
                  href="/login"
                  className="w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-[color:var(--design-body)] no-underline transition hover:bg-[color:var(--design-hover)] hover:text-[color:var(--design-ink)]"
                >
                  Log In
                </Link>
                <Link
                  href="/docs/secrets-with-cli"
                  className="w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-[color:var(--design-body)] no-underline transition hover:bg-[color:var(--design-hover)] hover:text-[color:var(--design-ink)]"
                >
                  Get Started
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Link
          href="/login"
          className="hidden md:inline-flex items-center py-4 text-xs md:text-sm font-semibold text-[color:var(--design-mid)] no-underline hover:no-underline hover:text-[color:var(--design-ink)] transition-colors duration-200 whitespace-nowrap"
        >
          Log In
        </Link>
        <a
          href="https://github.com/dotenvx/dotenvx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="hidden md:inline-flex h-11 w-11 items-center justify-center text-[color:var(--design-mid)] no-underline hover:no-underline hover:text-[color:var(--design-ink)] transition-colors duration-200"
          data-umami-event="GitHub repository link"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
      </div>
    </motion.div>
  )
})
