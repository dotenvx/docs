import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { TurborepoIcon } from '@/components/icons/TurborepoIcon'

export function Monorepos() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="monorepos">
        Monorepos
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="turborepo" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Turborepo
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Turborepo</p>
            <p className="mt-4"><Button href="/docs/monorepos/turborepo" variant="text" arrow="right">Turborepo Guide</Button></p>
          </div>
          <TurborepoIcon className="h-9 w-9 text-[#EF4444]"/>
        </div>
      </div>
    </div>
  )
}
