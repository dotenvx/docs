import Link from 'next/link'

export function Breadcrumb({ items = [] }) {
  return (
    <div className="not-prose mb-2 flex flex-wrap items-center gap-1.5 text-sm text-[color:var(--design-secondary)]">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
          {item.href ? (
            <Link
              href={item.href}
              className="no-underline hover:text-[color:var(--design-ink)]"
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-[color:var(--design-dim)]" aria-hidden="true">
              ›
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
