import Link from 'next/link'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { ModeToggle } from '@/components/ModeToggle'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, sections = [], wide = false }) {
  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents border-t border-[color:var(--design-mark)] lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-[color:var(--design-line)] lg:px-5 lg:pb-8 lg:pt-2 xl:w-80">
            <div className="hidden lg:flex lg:items-center">
              <Link href="/" aria-label="Home" className="block mt-[10px]">
                <Logo className="h-[1.8rem] w-[1.8rem] rounded-[0.05rem]" />
              </Link>
            </div>
            <Header className="border-t border-[color:var(--design-mark)] dark:rounded-t-lg"/>
            <Search className="mt-6 hidden lg:block" />
            <Navigation className="hidden lg:mt-6 lg:block" />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className={`${wide ? 'max-w-5xl' : 'max-w-2xl'} py-16`}>
            <Prose as="article">{children}</Prose>
          </main>
          <Footer wide={wide} />
        </div>
      </div>
      <ModeToggle />
    </SectionProvider>
  )
}
