import { Button } from '@/components/Button'

import { FastApiIcon } from '@/components/icons/FastApiIcon'
import { FlaskIcon } from '@/components/icons/FlaskIcon'

export function FrameworksPython() {
  return (
    <>
      <div key="flask" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Flask
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Flask</p>
          <p className="mt-4"><Button href="/docs/frameworks/flask" variant="text" arrow="right">Flask Guides</Button></p>
        </div>
        <FlaskIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
    </>
  )
}
