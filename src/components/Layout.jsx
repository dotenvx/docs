import Link from 'next/link'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents border-t border-yellow-300 lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-5 lg:pb-8 lg:pt-2 lg:dark:border-white/10 xl:w-80">
            <div className="hidden lg:flex lg:items-center">
              <Link href="/" aria-label="Home">
                <Logo className="w-10 h-10 mr-3" />
              </Link>
              <Link href="/docs" aria-label="Documentation" className="text-blue-500 hover:text-zinc-950 dark:text-blue-400 dark:hover:text-zinc-50 underline font-bold tracking-tight text-sm">
                Docs
              </Link>
            </div>
            <Header className="border-t border-yellow-300 dark:rounded-t-lg"/>
            <Navigation className="hidden lg:mt-6 lg:block" />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
