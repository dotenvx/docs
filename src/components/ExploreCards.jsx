import Link from 'next/link'

function ExploreCard ({ item }) {
  return (
    <Link
      href={item.href}
      className='group relative flex min-h-40 flex-col justify-between rounded-xl border border-zinc-900/10 bg-zinc-50/40 p-6 no-underline transition-colors hover:border-zinc-900/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20'
    >
      <div>
        <h3 className='text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100'>
          {item.title}
        </h3>
        <p className='mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
          {item.description}
        </p>
      </div>
    </Link>
  )
}

export function ExploreCards ({
  items = [
    {
      href: '/docs/learn/encrypting/introduction',
      title: 'Encrypting',
      description: 'Learn how encrypted .env files work.'
    },
    {
      href: '/docs/learn/encrypting/multiple-environments',
      title: 'Environments',
      description: 'Use encrypted env files across environments.'
    },
    {
      href: '/docs/learn/armoring/introduction',
      title: 'Armoring',
      description: 'Keep private keys off device with armored keys.'
    }
  ]
}) {
  return (
    <div className='not-prose mt-6 grid grid-cols-1 gap-4 min-[720px]:grid-cols-3'>
      {items.map((item) => (
        <ExploreCard key={item.href} item={item} />
      ))}
    </div>
  )
}
