import Link from 'next/link'

function ArmorCliReferenceCard({ item }) {
  let glyph = '❯'

  if (item.href === '/docs/cli/armor') {
    glyph = '⛨'
  } else if (item.href === '/docs/cli/armor/up') {
    glyph = '↑'
  } else if (item.href === '/docs/cli/armor/down') {
    glyph = '↓'
  } else if (item.href === '/docs/cli/armor/push') {
    glyph = '→'
  } else if (item.href === '/docs/cli/armor/pull') {
    glyph = '←'
  } else if (item.href === '/docs/cli/armor/move') {
    glyph = '↔'
  } else if (item.href === '/docs/cli/armor/login') {
    glyph = '◉'
  } else if (item.href === '/docs/cli/armor/logout') {
    glyph = '◌'
  } else if (item.href === '/docs/cli/armor/keypair') {
    glyph = '⚷'
  } else if (item.href === '/docs/cli/armor/settings') {
    glyph = '⌘'
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

export function ArmorCliReferenceCards() {
  let items = [
    { href: '/docs/cli/armor/up', title: 'Up' },
    { href: '/docs/cli/armor/down', title: 'Down' },
    { href: '/docs/cli/armor/push', title: 'Push' },
    { href: '/docs/cli/armor/pull', title: 'Pull' },
    { href: '/docs/cli/armor/move', title: 'Move' },
    { href: '/docs/cli/armor/keypair', title: 'Keypair' },
    { href: '/docs/cli/armor/login', title: 'Login' },
    { href: '/docs/cli/armor/logout', title: 'Logout' },
    { href: '/docs/cli/armor/settings', title: 'Settings' },
  ]

  return (
    <div className="not-prose mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-3 xl:grid-cols-3">
      {items.map((item) => (
        <ArmorCliReferenceCard key={item.href} item={item} />
      ))}
    </div>
  )
}
