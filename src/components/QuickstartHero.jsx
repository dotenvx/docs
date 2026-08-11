import clsx from 'clsx'

import { DesignHero } from '@/components/DesignHero'
import { AstroIcon } from '@/components/icons/AstroIcon'
import { BitwardenIcon } from '@/components/icons/BitwardenIcon'
import { ClaudeCodeIcon } from '@/components/icons/ClaudeCodeIcon'
import { BoltIcon } from '@/components/icons/BoltIcon'
import { CursorIcon } from '@/components/icons/CursorIcon'
import { DockerIcon } from '@/components/icons/DockerIcon'
import { DotnetIcon } from '@/components/icons/DotnetIcon'
import { ExpressIcon } from '@/components/icons/ExpressIcon'
import { FolderIcon } from '@/components/icons/FolderIcon'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { GoIcon } from '@/components/icons/GoIcon'
import { JavaIcon } from '@/components/icons/JavaIcon'
import { NextIcon } from '@/components/icons/NextIcon'
import { NodeIcon } from '@/components/icons/NodeIcon'
import { NxIcon } from '@/components/icons/NxIcon'
import { OnePasswordIcon } from '@/components/icons/OnePasswordIcon'
import { OpenAIIcon } from '@/components/icons/OpenAIIcon'
import { PhpIcon } from '@/components/icons/PhpIcon'
import { PythonIcon } from '@/components/icons/PythonIcon'
import { RubyIcon } from '@/components/icons/RubyIcon'
import { RustIcon } from '@/components/icons/RustIcon'
import { TurborepoIcon } from '@/components/icons/TurborepoIcon'

function CliIcon({ className, ...props }) {
  return (
    <span
      className={clsx(
        'flex items-center justify-center font-medium leading-none',
        className
      )}
      {...props}
    >
      ❯
    </span>
  )
}

const ICONS = {
  cli: { Icon: CliIcon, className: 'text-[color:var(--design-ink)]' },
  claude: { Icon: ClaudeCodeIcon, className: 'text-[#D97757]' },
  codex: { Icon: OpenAIIcon, className: 'text-[color:var(--design-ink)]' },
  cursor: { Icon: CursorIcon, className: 'text-[color:var(--design-ink)]' },
  '1password': { Icon: OnePasswordIcon, className: 'text-[#0572EC]' },
  bitwarden: { Icon: BitwardenIcon, className: 'text-[#175DDC]' },
  nodejs: { Icon: NodeIcon, className: 'text-[#339933]' },
  nextjs: { Icon: NextIcon, className: 'text-[color:var(--design-ink)] dark:invert' },
  express: { Icon: ExpressIcon, className: 'text-[color:var(--design-ink)] dark:invert' },
  astro: { Icon: AstroIcon, className: 'text-[color:var(--design-ink)]' },
  expo: { Icon: NodeIcon, className: 'text-[#339933]' },
  bun: { Icon: NodeIcon, className: 'text-[#339933]' },
  'cloudflare-workers': { Icon: BoltIcon, className: 'text-[#F38020]' },
  python: { Icon: PythonIcon, className: 'text-[#3776AB]' },
  uv: { Icon: PythonIcon, className: 'text-[#3776AB]' },
  php: { Icon: PhpIcon, className: 'text-[#777BB4]' },
  ruby: { Icon: RubyIcon, className: 'text-[#CC342D]' },
  go: { Icon: GoIcon, className: 'text-[#00ADD8]' },
  rust: { Icon: RustIcon, className: 'text-[color:var(--design-ink)] dark:invert' },
  java: { Icon: JavaIcon, className: 'text-[#F89820]' },
  kotlin: { Icon: JavaIcon, className: 'text-[#F89820]' },
  clojure: { Icon: JavaIcon, className: 'text-[#F89820]' },
  dotnet: { Icon: DotnetIcon, className: 'text-[#512BD4]' },
  docker: { Icon: DockerIcon, className: 'text-[#2496ED]' },
  'docker-compose': { Icon: DockerIcon, className: 'text-[#2496ED]' },
  'github-actions': { Icon: GitHubIcon, className: 'text-[color:var(--design-ink)]' },
  monorepos: { Icon: FolderIcon, className: 'text-[color:var(--design-ink)]' },
  nx: { Icon: NxIcon, className: 'text-[color:var(--design-ink)]' },
  turborepo: { Icon: TurborepoIcon, className: 'text-[color:var(--design-ink)]' },
  bash: { Icon: CliIcon, className: 'text-[color:var(--design-ink)]' },
  fish: { Icon: CliIcon, className: 'text-[color:var(--design-ink)]' },
  cron: { Icon: CliIcon, className: 'text-[color:var(--design-ink)]' },
}

/**
 * Quickstart / secrets-in page hero — radar design-hero with product icon.
 *
 * @param {string} icon — key from ICONS (e.g. "cli", "nodejs")
 * @param {string} title
 * @param {string} description
 * @param {{ label: string, href?: string }[]} crumbs
 */
export function QuickstartHero({ icon = 'cli', title, description, crumbs = [] }) {
  let entry = ICONS[icon] || ICONS.cli
  let Icon = entry.Icon

  return (
    <DesignHero
      title={title}
      description={description}
      crumbs={crumbs}
      visual={
        <Icon
          className={clsx('design-hero-icon', entry.className)}
          aria-hidden="true"
        />
      }
    />
  )
}
