import { Button } from '@/components/Button'

import { RailsIcon } from '@/components/icons/RailsIcon'
import { SinatraIcon } from '@/components/icons/SinatraIcon'

export function FrameworksRuby() {
  return (
    <>
      <div key="sinatra" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Sinatra
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Sinatra</p>
          <p className="mt-4"><Button href="/docs/frameworks/sinatra" variant="text" arrow="right">Sinatra Guides</Button></p>
        </div>
        <SinatraIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
    </>
  )
}
