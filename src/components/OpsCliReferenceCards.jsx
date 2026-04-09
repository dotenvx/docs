import Link from 'next/link'

function OpsCliReferenceCard({ item }) {
  let glyph = '❯'

  if (item.href === '/docs/ops/advanced/login') {
    glyph = '◉'
  } else if (item.href === '/docs/ops/advanced/logout') {
    glyph = '◌'
  } else if (item.href === '/docs/cli/keypair') {
    glyph = '⚷'
  }

  return (
    <Link
      href={item.href}
      className="group relative flex flex-col gap-3 rounded-xl border border-zinc-900/10 bg-zinc-50/40 p-4 no-underline transition-colors hover:border-zinc-900/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 md:p-5"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-900/15 bg-zinc-100/60 dark:border-white/15 dark:bg-white/5">
        <span className="text-sm font-semibold leading-none text-zinc-800 dark:text-zinc-200">
          {glyph}
        </span>
      </div>
      <h3 className="text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
        {item.title}
      </h3>
    </Link>
  )
}

export function OpsCliReferenceCards() {
  let items = [
    { href: '/docs/ops/advanced/login', title: 'Login' },
    { href: '/docs/ops/advanced/logout', title: 'Logout' },
    { href: '/docs/cli/keypair', title: 'Keypair' },
  ]

  return (
    <div className="not-prose mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-3 xl:grid-cols-3">
      {items.map((item) => (
        <OpsCliReferenceCard key={item.href} item={item} />
      ))}
    </div>
  )
}
