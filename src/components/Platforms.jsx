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
        <div key="docker" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Docker
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Docker</p>
            <p className="mt-4"><Button href="/docs/platforms/docker" variant="text" arrow="right">Docker Guides</Button></p>
          </div>
          <DockerIcon className="h-9 w-9 text-[#2496ED]"/>
        </div>
        <div key="heroku" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Heroku
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Heroku</p>
            <p className="mt-4"><Button href="/docs/platforms/heroku" variant="text" arrow="right">Heroku Guides</Button></p>
          </div>
          <HerokuIcon className="h-9 w-9 text-[#430098]"/>
        </div>
      </div>
    </div>
  )
}
