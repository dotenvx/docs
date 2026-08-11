import { forwardRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MobileSearch } from '@/components/Search'

export const Header = forwardRef(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-[var(--radar-chrome-height)] z-50 flex h-14 items-center justify-between gap-4 bg-[var(--design-bg)] px-4 transition sm:px-6 lg:hidden',
        !isInsideMobileNavigation && 'backdrop-blur-sm dark:backdrop-blur'
      )}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-[color:var(--design-line)]'
        )}
      />
      <div className="flex items-center gap-4">
        <MobileNavigation />
        <span className="text-compact font-medium text-[color:var(--design-ink)]">
          Docs
        </span>
      </div>
      <MobileSearch />
    </motion.div>
  )
})
