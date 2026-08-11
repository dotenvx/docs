import { DesignList } from '@/components/DesignList'

const defaultItems = [
  { href: '/docs/secrets-with-cli', title: 'CLI' },
  { href: '/docs/secrets-in-claude', title: 'Claude' },
  { href: '/docs/secrets-in-codex', title: 'Codex' },
  { href: '/docs/secrets-in-cursor', title: 'Cursor' },
  { href: '/docs/secrets-in-1password', title: '1Password' },
  { href: '/docs/secrets-in-bitwarden', title: 'Bitwarden' },
  { href: '/docs/secrets-in-nodejs', title: 'Node.js' },
  { href: '/docs/secrets-in-nextjs', title: 'Next.js' },
  { href: '/docs/secrets-in-express', title: 'Express' },
  { href: '/docs/secrets-in-python', title: 'Python' },
  { href: '/docs/secrets-in-php', title: 'PHP' },
  { href: '/docs/secrets-in-ruby', title: 'Ruby' },
  { href: '/docs/secrets-in-go', title: 'Go' },
  { href: '/docs/secrets-in-rust', title: 'Rust' },
  { href: '/docs/secrets-in-java', title: 'Java' },
  { href: '/docs/secrets-in-dotnet', title: '.NET' },
]

export function QuickstartCards({ title, items = defaultItems }) {
  return <DesignList title={title} items={items} />
}
