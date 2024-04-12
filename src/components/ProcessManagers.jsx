import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { Pm2Icon } from '@/components/icons/Pm2Icon'

export function ProcessManagers() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="process-managers">
        Process Managers
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="pm2" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              PM2
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with pm2</p>
            <p className="mt-4"><Button href="/docs/process-managers/pm2" variant="text" arrow="right">PM2 Guide</Button></p>
          </div>
          <Pm2Icon className="h-9 w-9 text-[#2B037A] dark:text-[#AC2E95]"/> 
        </div>
      </div>
    </div>
  )
}
