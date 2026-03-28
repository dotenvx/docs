import Link from 'next/link'

export function Breadcrumb({ items = [] }) {
  return (
    <div className="not-prose mb-2 flex flex-wrap items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
          {item.href ? (
            <Link
              href={item.href}
              className="no-underline hover:text-zinc-900 dark:hover:text-zinc-300"
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-zinc-400 dark:text-zinc-500" aria-hidden="true">
              ›
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
