import { Heading } from '@/components/Heading'
import { NpmIcon } from '@/components/icons/NpmIcon'
import { PnpmIcon } from '@/components/icons/PnpmIcon'
import { Button } from '@/components/Button'

export function PackageManagers() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="package-managers">
        Package Managers
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="npm" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              NPM
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with npm</p>
            <p className="mt-4"><Button href="/docs/package-managers/npm" variant="text" arrow="right">NPM Guide</Button></p>
          </div>
          <NpmIcon className="w-10 h-10 text-[#CB3837]" />
        </div>
        <div key="pnpm" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              PNPM
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with pnpm</p>
            <p className="mt-4"><Button href="/docs/package-managers/pnpm" variant="text" arrow="right">PNPM Guide</Button></p>
          </div>
          <PnpmIcon className="w-10 h-10 text-[#F69220]" />
        </div>
      </div>
    </div>
  )
}
