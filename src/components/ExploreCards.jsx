import { DesignList } from '@/components/DesignList'

const defaultItems = [
  { href: '/docs/learn/encrypting/introduction', title: 'Encrypting' },
  { href: '/docs/learn/encrypting/multiple-environments', title: 'Environments' },
  { href: '/docs/learn/armoring/introduction', title: 'Armoring' },
]

export function ExploreCards({ title, items = defaultItems }) {
  return <DesignList title={title} items={items} />
}
