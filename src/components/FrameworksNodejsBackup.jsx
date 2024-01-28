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
      <div key="angular" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Angular
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy an Angular App to Vercel</p>
          <p className="mt-4"><Button href="/docs/frameworks/angular/vercel" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <AngularIcon className="h-9 w-9 text-[#DD0031]"/>
      </div>
      <div key="astro" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Astro
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy an Astro.js App to Netlify</p>
          <p className="mt-4"><Button href="/docs/frameworks/astro/netlify" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <AstroIcon className="h-9 w-9 text-[#FF5D01]"/>
      </div>
      <div key="express" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Express.js
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Express.js</p>
          <p className="mt-4"><Button href="/docs/frameworks/express" variant="text" arrow="right">Express Guides</Button></p>
        </div>
        <ExpressIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
      <div key="gatsby" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Gatsby.js
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Gatsby.js</p>
          <p className="mt-4"><Button href="/docs/frameworks/gatsby" variant="text" arrow="right">Gatsby Guides</Button></p>
        </div>
        <GatsbyIcon className="h-9 w-9 text-[#663399]"/>
      </div>
      <div key="nestjs" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Nest.js
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Nest.js</p>
          <p className="mt-4 flex gap-x-2">
            <Button href="/docs/frameworks/nestjs/heroku" variant="text" arrow="right">Read guide</Button>
          </p>
        </div>
        <NestIcon className="h-9 w-9 text-[#E0234E]"/>
      </div>
      <div key="next" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Next.js
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Next.js</p>
          <p className="mt-4 flex gap-x-2">
            <Button href="/docs/frameworks/next" variant="text" arrow="right">Next.js Guides</Button>
          </p>
        </div>
        <NextIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
      <div key="nuxt" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Nuxt.js
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Nuxt.js</p>
          <p className="mt-4"><Button href="/docs/frameworks/nuxtjs" variant="text" arrow="right">Nuxt.js Guides</Button></p>
        </div>
        <NuxtIcon className="h-9 w-9 text-[#00DC82]"/>
      </div>
      <div key="pm2" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            PM2
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with PM2</p>
          <p className="mt-4"><Button href="/docs/frameworks/pm2/heroku" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <Pm2Icon className="h-9 w-9 text-[#2B037A] dark:text-[#AC2E95]"/>
      </div>
      <div key="remix" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Remix
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Remix</p>
          <p className="mt-4"><Button href="/docs/frameworks/remix" variant="text" arrow="right">Remix Guides</Button></p>
        </div>
        <RemixIcon className="h-9 w-9 text-[#000000] dark:invert"/>
      </div>
      <div key="serverless" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Serverless
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Serverless App to AWS Lambda</p>
          <p className="mt-4"><Button href="/docs/frameworks/serverless/aws-lambda" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <ServerlessIcon className="h-9 w-9 text-[#FD5750]"/>
      </div>
      <div key="svelte-kit" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            SvelteKit
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a SvelteKit App to Vercel</p>
          <p className="mt-4"><Button href="/docs/frameworks/svelte-kit/vercel" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <SvelteIcon className="h-9 w-9 text-[#FF3E00]"/>
      </div>
      <div key="turborepo" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Turborepo
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Turborepo App to Vercel</p>
          <p className="mt-4"><Button href="/docs/frameworks/turborepo/vercel" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <TurborepoIcon className="h-9 w-9 text-[#EF4444]"/>
      </div>

      <div key="vite" className="flex flex-row-reverse gap-6">
        <div className="flex-auto">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Vite
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy Vite App to Vercel</p>
          <p className="mt-4"><Button href="/docs/frameworks/vite/vercel" variant="text" arrow="right">Read guide</Button></p>
        </div>
        <ViteIcon className="h-9 w-9 text-[#646CFF]"/>
      </div>
    </>
  )
}
