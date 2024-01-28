import { Button } from '@/components/Button'

import { AngularIcon } from '@/components/icons/AngularIcon'
import { AstroIcon } from '@/components/icons/AstroIcon'
import { ExpressIcon } from '@/components/icons/ExpressIcon'
import { GatsbyIcon } from '@/components/icons/GatsbyIcon'
import { NestIcon } from '@/components/icons/NestIcon'
import { NextIcon } from '@/components/icons/NextIcon'
import { NuxtIcon } from '@/components/icons/NuxtIcon'
import { Pm2Icon } from '@/components/icons/Pm2Icon'
import { RemixIcon } from '@/components/icons/RemixIcon'
import { ServerlessIcon } from '@/components/icons/ServerlessIcon'
import { SvelteIcon } from '@/components/icons/SvelteIcon'
import { TurborepoIcon } from '@/components/icons/TurborepoIcon'
import { ViteIcon } from '@/components/icons/ViteIcon'

export function FrameworksNodejs() {
  return (
    <>
      <div key="astro" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Astro
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Astro</p>
          <p className="mt-4"><Button href="/docs/frameworks/astro" variant="text" arrow="right">Astro Guides</Button></p>
        </div>
        <AstroIcon className="h-9 w-9 text-[#FF5D01]"/>
      </div>
      <div key="express" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Express.js
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Express</p>
          <p className="mt-4"><Button href="/docs/frameworks/express" variant="text" arrow="right">Express Guides</Button></p>
        </div>
        <ExpressIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
      <div key="next" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Next.js
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Next.js</p>
          <p className="mt-4 flex gap-x-2">
            <Button href="/docs/frameworks/next" variant="text" arrow="right">Next.js Guides</Button>
          </p>
        </div>
        <NextIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
      <div key="remix" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Remix
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Remix</p>
          <p className="mt-4"><Button href="/docs/frameworks/remix" variant="text" arrow="right">Remix Guides</Button></p>
        </div>
        <RemixIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
    </>
  )
}
