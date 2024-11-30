import { Heading } from '@/components/Heading'
import { TriggerdotdevIcon } from '@/components/icons/TriggerdotdevIcon'
import { Button } from '@/components/Button'

export function BackgroundJobs() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="background-jobs">
        Background Jobs
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="triggerdotdev" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Trigger.dev
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with trigger.dev</p>
            <p className="mt-4"><Button href="/docs/background-jobs/triggerdotdev" variant="text" arrow="right">Trigger.dev Guide</Button></p>
          </div>
          <TriggerdotdevIcon className="w-10 h-10 text-[#000000] dark:text-[#AFFD6D]" />
        </div>
      </div>
    </div>
  )
}
