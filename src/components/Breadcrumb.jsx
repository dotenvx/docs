import Link from 'next/link'

export function Breadcrumb({ items = [] }) {
  return (
    <nav className="design-breadcrumb not-prose" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="design-breadcrumb-item">
          {item.href ? (
            <Link href={item.href} className="design-breadcrumb-link">
              {item.label}
            </Link>
          ) : (
            <span className="design-breadcrumb-current">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="design-breadcrumb-sep" aria-hidden="true">
              ›
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
