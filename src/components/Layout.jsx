import { motion } from 'framer-motion'

import { DocsSectionSwitcher } from '@/components/DocsSectionSwitcher'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ModeToggle } from '@/components/ModeToggle'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { RadarNav } from '@/components/RadarNav'
import { Search } from '@/components/Search'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, sections = [], wide = false }) {
  return (
    <SectionProvider sections={sections}>
      <RadarNav />
      <Header />
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:bottom-0 lg:left-0 lg:top-[var(--radar-chrome-height)] lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:pb-8 lg:pt-4 xl:w-80">
            <div className="hidden lg:block">
              <div className="px-5">
                <Search />
              </div>
              <DocsSectionSwitcher className="mt-4" />
              <Navigation className="mt-5 px-5" />
            </div>
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8 lg:pt-6">
          <main className={`${wide ? 'max-w-5xl' : 'max-w-2xl'} pb-16`}>
            <Prose as="article">{children}</Prose>
          </main>
          <Footer wide={wide} />
        </div>
      </div>
      <ModeToggle />
    </SectionProvider>
  )
}
