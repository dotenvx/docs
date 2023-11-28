import { Button } from '@/components/Button'

import { RocketRsIcon } from '@/components/icons/RocketRsIcon'

export function FrameworksRust() {
  return (
    <>
      <div key="rails" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Rocket
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Rocket</p>
          <p className="mt-4"><Button href="/docs/frameworks/rocket-rs/heroku" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <RocketRsIcon className="h-9 w-9 text-[#C3454C]"/>
      </div>
    </>
  )
}
