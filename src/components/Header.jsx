import { Fragment, forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Popover, Transition } from '@headlessui/react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { ModeToggle } from '@/components/ModeToggle'
import { MobileSearch } from '@/components/Search'

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
          'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
        isInsideMobileNavigation
          ? 'bg-[#f6f1e6] dark:bg-black'
          : 'bg-[#f6f1e6]/[var(--bg-opacity-light)] dark:bg-black/[var(--bg-opacity-dark)]'
      )}
      style={{
        '--bg-opacity-light': bgOpacityLight,
        '--bg-opacity-dark': bgOpacityDark,
      }}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5'
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
          <Logo className="h-4 w-auto" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ModeToggle />
        </div>
        <Popover className="relative md:hidden">
          <Popover.Button
            aria-label="More"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-xl leading-none text-zinc-500 hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200 ease-in duration-150"
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
            <Popover.Panel className="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-lg bg-zinc-50 p-2 shadow-lg ring-1 ring-zinc-900/10 dark:bg-zinc-900 dark:ring-white/10">
              <div className="flex flex-col items-center gap-1">
                <Link
                  href="/login"
                  className="w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-zinc-700 no-underline transition hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-zinc-700 no-underline transition hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  Get Started
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Link
          href="/login"
          className="hidden md:inline-flex items-center py-4 text-xs md:text-sm font-semibold text-zinc-500 dark:text-zinc-300/90 no-underline hover:no-underline hover:text-zinc-700 dark:hover:text-zinc-100 transition-colors duration-200 whitespace-nowrap"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="hidden md:inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-1.5 font-extrabold tracking-tight text-white dark:text-white no-underline hover:no-underline hover:text-zinc-950 dark:hover:text-zinc-950 transition-all duration-200 hover:bg-zinc-100 hover:shadow-[0_0_24px_rgba(236,213,63,0.18)] text-xs md:text-sm whitespace-nowrap"
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  )
})
