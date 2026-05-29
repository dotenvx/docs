import Link from 'next/link'

function VltCliReferenceCard({ item }) {
  let glyph = '❯'

  if (item.href === '/docs/cli/vlt/armor') {
    glyph = '⛨'
  } else if (item.href === '/docs/cli/vlt/armor-up') {
    glyph = '↑'
  } else if (item.href === '/docs/cli/vlt/armor-down') {
    glyph = '↓'
  } else if (item.href === '/docs/cli/vlt/armor-push') {
    glyph = '→'
  } else if (item.href === '/docs/cli/vlt/armor-pull') {
    glyph = '←'
  } else if (item.href === '/docs/cli/vlt/armor-rotate') {
    glyph = '↻'
  } else if (item.href === '/docs/cli/vlt/armor-move') {
    glyph = '↔'
  } else if (item.href === '/docs/cli/vlt/login') {
    glyph = '◉'
  } else if (item.href === '/docs/cli/vlt/logout') {
    glyph = '◌'
  } else if (item.href === '/docs/cli/vlt/keypair') {
    glyph = '⚷'
  } else if (item.href === '/docs/cli/vlt/settings') {
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

export function VltCliReferenceCards() {
  let items = [
    { href: '/docs/cli/vlt/armor', title: 'Armor' },
    { href: '/docs/cli/vlt/login', title: 'Login' },
    { href: '/docs/cli/vlt/logout', title: 'Logout' },
    { href: '/docs/cli/vlt/keypair', title: 'Keypair' },
    { href: '/docs/cli/vlt/settings', title: 'Settings' },
  ]

  return (
    <div className="not-prose mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-3 xl:grid-cols-3">
      {items.map((item) => (
        <VltCliReferenceCard key={item.href} item={item} />
      ))}
    </div>
  )
}

export function VltArmorReferenceCards() {
  let items = [
    { href: '/docs/cli/vlt/armor-up', title: 'Up' },
    { href: '/docs/cli/vlt/armor-down', title: 'Down' },
    { href: '/docs/cli/vlt/armor-push', title: 'Push' },
    { href: '/docs/cli/vlt/armor-pull', title: 'Pull' },
    { href: '/docs/cli/vlt/armor-rotate', title: 'Rotate' },
    { href: '/docs/cli/vlt/armor-move', title: 'Move' },
  ]

  return (
    <div className="not-prose mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-3 xl:grid-cols-3">
      {items.map((item) => (
        <VltCliReferenceCard key={item.href} item={item} />
      ))}
    </div>
  )
}
