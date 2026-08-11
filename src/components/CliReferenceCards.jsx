import { DesignList } from '@/components/DesignList'

const commands = [
  { href: '/docs/cli/run', title: 'Run', meta: 'dotenvx run' },
  { href: '/docs/cli/get', title: 'Get', meta: 'dotenvx get' },
  { href: '/docs/cli/set', title: 'Set', meta: 'dotenvx set' },
  { href: '/docs/cli/del', title: 'Del', meta: 'dotenvx del' },
  { href: '/docs/cli/encrypt', title: 'Encrypt', meta: 'dotenvx encrypt' },
  { href: '/docs/cli/decrypt', title: 'Decrypt', meta: 'dotenvx decrypt' },
  { href: '/docs/cli/keypair', title: 'Keypair', meta: 'dotenvx keypair' },
  { href: '/docs/cli/ls', title: 'Ls', meta: 'dotenvx ls' },
  { href: '/docs/cli/gitignore', title: 'Gitignore', meta: 'dotenvx gitignore' },
  { href: '/docs/cli/genexample', title: 'Genexample', meta: 'dotenvx genexample' },
  { href: '/docs/cli/validate', title: 'Validate', meta: 'dotenvx validate' },
  { href: '/docs/cli/precommit', title: 'Precommit', meta: 'dotenvx precommit' },
  { href: '/docs/cli/prebuild', title: 'Prebuild', meta: 'dotenvx prebuild' },
]

const betterSecurity = [
  { href: '/docs/cli/lock', title: 'Lock ⊡', meta: 'dotenvx lock' },
  { href: '/docs/cli/native', title: 'Native ⌥', meta: 'dotenvx native' },
]

const forSecurityTeams = [
  {
    href: '/docs/cli/armor/introduction',
    title: 'Armor ⛨',
    meta: 'dotenvx armor',
  },
]

export function CliReferenceCards() {
  return <DesignList title="Commands" items={commands} />
}

export function CliBetterSecurityReferenceCards() {
  return <DesignList title="Better Security" items={betterSecurity} />
}

export function CliForSecurityTeamsReferenceCards() {
  return <DesignList title="For Security Teams" items={forSecurityTeams} />
}

export function CliReferenceLists() {
  return (
    <div className="not-prose mt-10">
      <DesignList title="Commands" items={commands} />
      <DesignList title="Better Security" items={betterSecurity} />
      <DesignList title="For Security Teams" items={forSecurityTeams} />
    </div>
  )
}
