import Link from 'next/link'

import { AstroIcon } from '@/components/icons/AstroIcon'
import { ExpressIcon } from '@/components/icons/ExpressIcon'
import { NodeIcon } from '@/components/icons/NodeIcon'
import { PythonIcon } from '@/components/icons/PythonIcon'

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
  ],
}) {
  return (
    <div className="not-prose mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <QuickstartCard key={item.href} item={item} />
      ))}
    </div>
  )
}
