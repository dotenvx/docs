import clsx from 'clsx'

import { Breadcrumb } from '@/components/Breadcrumb'

/**
 * Docs mirror of ../radar design-hero — copy left, visual right.
 * Pass `visual` (e.g. large icon) instead of radar's keypair.
 */
export function DesignHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  visual,
  className,
}) {
  return (
    <section className={clsx('design-hero not-prose', className)}>
      <div className="design-hero-grid">
        <div className="design-hero-copy">
          <div className="design-page-header design-hero-header">
            {crumbs.length > 0 ? (
              <Breadcrumb items={crumbs} />
            ) : eyebrow ? (
              <p className="design-page-header-eyebrow">{eyebrow}</p>
            ) : null}
            <h1 className="design-page-title design-page-title--flush">{title}</h1>
            {description ? (
              <p className="design-page-header-desc">{description}</p>
            ) : null}
          </div>
        </div>
        {visual ? (
          <div className="design-hero-visual design-hero-visual--icon">{visual}</div>
        ) : null}
      </div>
    </section>
  )
}
