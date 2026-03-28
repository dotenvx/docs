import Link from 'next/link'

import { AstroIcon } from '@/components/icons/AstroIcon'
import { BookIcon } from '@/components/icons/BookIcon'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { DotnetIcon } from '@/components/icons/DotnetIcon'
import { ExpressIcon } from '@/components/icons/ExpressIcon'
import { GoIcon } from '@/components/icons/GoIcon'
import { JavaIcon } from '@/components/icons/JavaIcon'
import { NodeIcon } from '@/components/icons/NodeIcon'
import { PhpIcon } from '@/components/icons/PhpIcon'
import { PythonIcon } from '@/components/icons/PythonIcon'
import { RubyIcon } from '@/components/icons/RubyIcon'
import { RustIcon } from '@/components/icons/RustIcon'

function QuickstartCard({ item }) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className="group relative flex flex-col gap-3 rounded-xl border border-zinc-900/10 bg-zinc-50/40 p-4 no-underline transition-colors hover:border-zinc-900/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 md:p-5"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-900/15 bg-zinc-100/60 dark:border-white/15 dark:bg-white/5">
        <Icon className={item.iconClass ?? 'h-5 w-5 text-zinc-800 dark:text-zinc-200'} />
      </div>
      <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
        {item.title}
      </h3>
    </Link>
  )
}

export function QuickstartCards({
  items = [
    {
      href: '/docs/secrets-in-nodejs',
      title: 'Node.js Quickstart',
      icon: NodeIcon,
      iconClass: 'h-5 w-5 text-[#339933]',
    },
    {
      href: '/docs/secrets-in-express',
      title: 'Express Quickstart',
      icon: ExpressIcon,
      iconClass: 'h-5 w-5 text-[#000000] dark:invert',
    },
    {
      href: '/docs/secrets-in-astro',
      title: 'Astro Quickstart',
      icon: AstroIcon,
      iconClass: 'h-5 w-5 text-[#FF5D01]',
    },
    {
      href: '/docs/secrets-in-python',
      title: 'Python Quickstart',
      icon: PythonIcon,
      iconClass: 'h-5 w-5 text-[#3776AB]',
    },
    {
      href: '/docs/secrets-in-php',
      title: 'PHP Quickstart',
      icon: PhpIcon,
      iconClass: 'h-5 w-5 text-[#777BB4]',
    },
    {
      href: '/docs/secrets-in-ruby',
      title: 'Ruby Quickstart',
      icon: RubyIcon,
      iconClass: 'h-5 w-5 text-[#CC342D]',
    },
    {
      href: '/docs/secrets-in-go',
      title: 'Go Quickstart',
      icon: GoIcon,
      iconClass: 'h-5 w-5 text-[#00ADD8]',
    },
    {
      href: '/docs/secrets-in-rust',
      title: 'Rust Quickstart',
      icon: RustIcon,
      iconClass: 'h-5 w-5 text-[#000000] dark:invert',
    },
    {
      href: '/docs/secrets-in-java',
      title: 'Java Quickstart',
      icon: JavaIcon,
      iconClass: 'h-5 w-5 text-[#F89820]',
    },
    {
      href: '/docs/secrets-in-clojure',
      title: 'Clojure Quickstart',
      icon: BookIcon,
      iconClass: 'h-5 w-5 text-[#5881D8]',
    },
    {
      href: '/docs/secrets-in-kotlin',
      title: 'Kotlin Quickstart',
      icon: BookIcon,
      iconClass: 'h-5 w-5 text-[#7F52FF]',
    },
    {
      href: '/docs/secrets-in-dotnet',
      title: '.NET Quickstart',
      icon: DotnetIcon,
      iconClass: 'h-5 w-5 text-[#512BD4]',
    },
    {
      href: '/docs/secrets-in-bash',
      title: 'Bash Quickstart',
      icon: BookIcon,
      iconClass: 'h-5 w-5 text-[#4EAA25]',
    },
    {
      href: '/docs/secrets-in-fish',
      title: 'Fish Quickstart',
      icon: BookIcon,
      iconClass: 'h-5 w-5 text-[#FF6A00]',
    },
    {
      href: '/docs/secrets-in-cron',
      title: 'Cron Quickstart',
      icon: CalendarIcon,
      iconClass: 'h-5 w-5 text-[#0EA5E9]',
    },
  ],
}) {
  return (
    <div className="not-prose mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      {items.map((item) => (
        <QuickstartCard key={item.href} item={item} />
      ))}
    </div>
  )
}
