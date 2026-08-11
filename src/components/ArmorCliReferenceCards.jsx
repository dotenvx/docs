import { DesignList } from '@/components/DesignList'

const items = [
  { href: '/docs/cli/armor/up', title: 'Up' },
  { href: '/docs/cli/armor/down', title: 'Down' },
  { href: '/docs/cli/armor/push', title: 'Push' },
  { href: '/docs/cli/armor/pull', title: 'Pull' },
  { href: '/docs/cli/armor/open', title: 'Open' },
  { href: '/docs/cli/armor/move', title: 'Move' },
  { href: '/docs/cli/armor/login', title: 'Login' },
  { href: '/docs/cli/armor/logout', title: 'Logout' },
  { href: '/docs/cli/armor/status', title: 'Status' },
  { href: '/docs/cli/armor/settings', title: 'Settings' },
]

export function ArmorCliReferenceCards() {
  return <DesignList items={items} />
}
