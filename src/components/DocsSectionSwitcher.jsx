import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const sections = [
  { id: 'docs', label: 'Docs', href: '/docs' },
  { id: 'cli', label: 'CLI', href: '/docs/cli' },
  { id: 'sdk', label: 'SDK', href: '/docs/sdk' },
]

export function getDocsSection(pathname = '') {
  if (pathname.startsWith('/docs/cli')) return 'cli'
  if (pathname.startsWith('/docs/sdk')) return 'sdk'
  return 'docs'
}

export function DocsSectionSwitcher({ className }) {
  let router = useRouter()
  let current = getDocsSection(router.pathname)

  return (
    <div
      className={clsx('docs-section-switcher', className)}
      role="tablist"
      aria-label="Docs section"
    >
      {sections.map((section) => {
        let isActive = section.id === current

        return (
          <Link
            key={section.id}
            href={section.href}
            role="tab"
            aria-selected={isActive}
            className={clsx(
              'docs-section-switcher-item',
              isActive && 'is-active'
            )}
          >
            {section.label}
          </Link>
        )
      })}
    </div>
  )
}
