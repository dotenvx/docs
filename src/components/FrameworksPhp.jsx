import { Button } from '@/components/Button'

import { LaravelIcon } from '@/components/icons/LaravelIcon'

export function FrameworksPhp() {
  return (
    <>
      <div key="rails" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Laravel
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Laravel</p>
          <p className="mt-4"><Button href="/docs/frameworks/laravel" variant="text" arrow="right">Laravel Guides</Button></p>
        </div>
        <LaravelIcon className="h-9 w-9 text-[#FF2D20]"/>
      </div>
    </>
  )
}
