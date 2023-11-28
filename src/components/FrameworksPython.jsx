import { Button } from '@/components/Button'

import { FastApiIcon } from '@/components/icons/FastApiIcon'
import { FlaskIcon } from '@/components/icons/FlaskIcon'

export function FrameworksPython() {
  return (
    <>
      <div key="fastapi" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            FastApi
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a FastApi App to Heroku</p>
          <p className="mt-4"><Button href="/docs/frameworks/fastapi/heroku" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <FastApiIcon className="h-9 w-9 text-[#009688]"/>
      </div>
      <div key="flask" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Flask
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Flask App to Heroku</p>
          <p className="mt-4"><Button href="/docs/frameworks/flask/heroku" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <FlaskIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
    </>
  )
}
