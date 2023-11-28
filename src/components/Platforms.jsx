import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

import { AwsIcon } from '@/components/icons/AwsIcon'
import { Cloud66Icon } from '@/components/icons/Cloud66Icon'
import { DigitalOceanIcon } from '@/components/icons/DigitalOceanIcon'
import { DockerIcon } from '@/components/icons/DockerIcon'
import { EdgioIcon } from '@/components/icons/EdgioIcon'
import { FlyIcon } from '@/components/icons/FlyIcon'
import { GatsbyIcon } from '@/components/icons/GatsbyIcon'
import { HerokuIcon } from '@/components/icons/HerokuIcon'
import { KamalIcon } from '@/components/icons/KamalIcon'
import { LaravelForgeIcon } from '@/components/icons/LaravelForgeIcon'
import { NetlifyIcon } from '@/components/icons/NetlifyIcon'
import { NorthflankIcon } from '@/components/icons/NorthflankIcon'
import { RailwayIcon } from '@/components/icons/RailwayIcon'
import { RenderIcon } from '@/components/icons/RenderIcon'
import { VercelIcon } from '@/components/icons/VercelIcon'

export function Platforms() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="platforms">
        Platforms
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="aws-lambda" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              AWS Lambda
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with AWS Lambda</p>
            <p className="mt-4"><Button href="/docs/platforms/aws-lambda" variant="text" arrow="right">AWS Lambda Guides</Button></p>
          </div>
          <AwsIcon className="h-9 w-9 text-[#FF9900]"/>
        </div>
        <div key="cloud66" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Cloud66
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Cloud66</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/cloud66" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <Cloud66Icon className="h-9 w-9 text-[#3C72B9]"/>
        </div>
        <div key="digital-ocean" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Digital Ocean
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Digital Ocean</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/digital-ocean" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <DigitalOceanIcon className="h-9 w-9 text-[#0080FF]"/>
        </div>
        <div key="docker" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Docker
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Docker &amp; Docker Compose</p>
            <p className="mt-4"><Button href="/docs/platforms/docker" variant="text" arrow="right">Docker Guides</Button></p>
          </div>
          <DockerIcon className="h-9 w-9 text-[#2496ED]"/>
        </div>
        <div key="edgio" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Edgio
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Nuxt.js App to Edgio</p>
            <p className="mt-4"><Button href="/docs/frameworks/nuxtjs/edgio" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <EdgioIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="fly" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Fly
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Fly.io</p>
            <p className="mt-4"><Button href="/docs/platforms/fly" variant="text" arrow="right">Fly.io Guides</Button></p>
          </div>
          <FlyIcon className="h-9 w-9 text-[#7B3BE2]"/>
        </div>
        <div key="gatsby-edge" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Gatsby Edge Network
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Gatsby.js App to Gatsby Edge Network</p>
            <p className="mt-4"><Button href="/docs/frameworks/gatsby/gatsby-edge" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <GatsbyIcon className="h-9 w-9 text-[#663399]"/>
        </div>
        <div key="heroku" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Heroku
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Heroku</p>
            <p className="mt-4"><Button href="/docs/platforms/heroku" variant="text" arrow="right">Heroku Guides</Button></p>
          </div>
          <HerokuIcon className="h-9 w-9 text-[#430098]"/>
        </div>
        <div key="kamal" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Kamal
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Kamal</p>
            <p className="mt-4"><Button href="/docs/platforms/kamal" variant="text" arrow="right">Kamal Guides</Button></p>
          </div>
          <KamalIcon className="h-9 w-9 text-[#3A80ED]"/>
        </div>
        <div key="laravel-forge" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Laravel Forge
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Laravel Forge</p>
            <p className="mt-4"><Button href="/docs/frameworks/laravel/laravel-forge" variant="text" arrow="right">Laravel Forge Guides</Button></p>
          </div>
          <LaravelForgeIcon className="h-9 w-9 text-[#212936] dark:invert"/>
        </div>

        <div key="netlify" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Netlify
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Netlify</p>
            <p className="mt-4"><Button href="/docs/platforms/netlify" variant="text" arrow="right">Netlify Guides</Button></p>
          </div>
          <NetlifyIcon className="h-9 w-9 text-[#00C7B7]"/>
        </div>
        <div key="northflank" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Northflank
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Next.js App to Northflank</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/northflank" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <NorthflankIcon className="h-9 w-9 text-[#01E3C5]"/>
        </div>
        <div key="railway" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Railway
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Railway</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/railway" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <RailwayIcon className="h-9 w-9 text-[#0B0D0E] dark:invert"/>
        </div>
        <div key="render" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Render
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Render</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/render" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <RenderIcon className="h-9 w-9 text-[#46E3B7]"/>
        </div>
        <div key="vercel" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Vercel
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Vercel</p>
            <p className="mt-4"><Button href="/docs/platforms/vercel" variant="text" arrow="right">Vercel Guides</Button></p>
          </div>
          <VercelIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
      </div>
    </div>
  )
}
