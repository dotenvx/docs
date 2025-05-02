import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

import { AwsIcon } from '@/components/icons/AwsIcon'
import { AwsLambdaIcon } from '@/components/icons/AwsLambdaIcon'
import { Cloud66Icon } from '@/components/icons/Cloud66Icon'
import { DigitalOceanIcon } from '@/components/icons/DigitalOceanIcon'
import { DockerIcon } from '@/components/icons/DockerIcon'
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

export function Platforms(props) {
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
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with AWS Lambda</p>
            <p className="mt-4"><Button href="/docs/platforms/aws-lambda" variant="text" arrow="right">AWS Lambda Guide</Button></p>
          </div>
          <AwsLambdaIcon className="h-9 w-9 text-[#FF9900]"/>
        </div>
        <div key="digital-ocean" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Digital Ocean
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Digital Ocean</p>
            <p className="mt-4"><Button href="/docs/platforms/digital-ocean" variant="text" arrow="right">Digital Ocean Guide</Button></p>
          </div>
          <DigitalOceanIcon className="h-9 w-9 text-[#0080FF]"/>
        </div>
        <div key="docker" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Docker
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Docker</p>
            <p className="mt-4"><Button href="/docs/platforms/docker" variant="text" arrow="right">Docker Guide</Button></p>
          </div>
          <DockerIcon className="h-9 w-9 text-[#2496ED]"/>
        </div>
        <div key="fly" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Fly
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Fly</p>
            <p className="mt-4"><Button href="/docs/platforms/fly" variant="text" arrow="right">Fly Guide</Button></p>
          </div>
          <FlyIcon className="h-9 w-9 text-[#7B3BE2]"/>
        </div>
        <div key="heroku" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Heroku
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Heroku</p>
            <p className="mt-4"><Button href="/docs/platforms/heroku" variant="text" arrow="right">Heroku Guide</Button></p>
          </div>
          <HerokuIcon className="h-9 w-9 text-[#430098]"/>
        </div>
        {props.includeNode ? (
          <div key="netlify" className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Netlify
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenv with Netlify</p>
              <p className="mt-4"><Button href="/docs/platforms/netlify" variant="text" arrow="right">Netlify Guide</Button></p>
            </div>
            <NetlifyIcon className="h-9 w-9 text-[#00C7B7]"/>
          </div>
        ) : (
          <>
          </>
        )}
        <div key="railway" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Railway
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Railway</p>
            <p className="mt-4"><Button href="/docs/platforms/railway" variant="text" arrow="right">Railway Guide</Button></p>
          </div>
          <RailwayIcon className="h-9 w-9 text-[#0B0D0E] dark:invert"/>
        </div>
        <div key="render" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Render
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Render</p>
            <p className="mt-4"><Button href="/docs/platforms/render" variant="text" arrow="right">Render Guide</Button></p>
          </div>
          <RenderIcon className="h-9 w-9 text-[#46E3B7]"/>
        </div>
        {props.includeNode ? (
          <div key="vercel" className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Vercel
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Vercel</p>
              <p className="mt-4"><Button href="/docs/platforms/vercel" variant="text" arrow="right">Vercel Guide</Button></p>
            </div>
            <VercelIcon className="h-9 w-9 text-[#000000] dark:invert"/>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  )
}
