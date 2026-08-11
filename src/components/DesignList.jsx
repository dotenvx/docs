import { DesignLink } from '@/components/DesignLink'

export function DesignList({ title, items = [] }) {
  return (
    <div className={`design-list not-prose ${title ? 'mt-8' : 'mt-6'}`}>
      {title ? <p className="design-list-title">{title}</p> : null}
      <ul className="design-list-items">
        {items.map((item) => (
          <li key={`${item.href}:${item.title}`}>
            <DesignLink href={item.href}>{item.title}</DesignLink>
            {item.meta ? (
              <span className="design-list-meta">{item.meta}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
