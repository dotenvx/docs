import Link from 'next/link'
import clsx from 'clsx'

/**
 * Docs mirror of ../radar design/link — use for all body/content links.
 */
export function DesignLink({ href = '#', className, children, ...props }) {
  return (
    <Link href={href} className={clsx('design-link', className)} {...props}>
      {children}
    </Link>
  )
}
