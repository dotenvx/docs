import { DesignList } from '@/components/DesignList'

const items = [
  { href: '/docs/sdk/config', title: 'config' },
  { href: '/docs/sdk/parse', title: 'parse' },
  { href: '/docs/sdk/config-set-key-value', title: 'set' },
  { href: '/docs/sdk/config-get-key', title: 'get' },
]

export function SdkReferenceCards() {
  return <DesignList items={items} />
}
