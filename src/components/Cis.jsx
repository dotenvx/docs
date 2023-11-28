import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

import { AwsIcon } from '@/components/icons/AwsIcon'
import { BitbucketIcon } from '@/components/icons/BitbucketIcon'
import { BuddyIcon } from '@/components/icons/BuddyIcon'
import { CircleCiIcon } from '@/components/icons/CircleCiIcon'
import { DaggerIcon } from '@/components/icons/DaggerIcon'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { GitlabIcon } from '@/components/icons/GitlabIcon'
import { GoogleCloudIcon } from '@/components/icons/GoogleCloudIcon'
import { JenkinsIcon } from '@/components/icons/JenkinsIcon'
import { PulumiIcon } from '@/components/icons/PulumiIcon'
import { TravisCiIcon } from '@/components/icons/TravisCiIcon'

export function Cis() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="cis">
        CI/CD
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="aws-beanstalk" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              AWS Beanstalk
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with AWS Beanstalk</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/aws-beanstalk" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <AwsIcon className="h-9 w-9 text-[#7C974A]"/>
        </div>
        <div key="bitbucket" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Bitbucket
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with Bitbucket</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/bitbucket" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <BitbucketIcon className="h-9 w-9 text-[#1A86FD]"/>
        </div>
        <div key="buddy" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Buddy
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with Buddy</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/buddy" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <BuddyIcon className="h-9 w-9 text-[#1A86FD]"/>
        </div>
        <div key="circle-ci" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              CircleCI
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with CircleCI</p>
            <p className="mt-4"><Button href="/docs/cis/circleci" variant="text" arrow="right">CircleCI Guides</Button></p>
          </div>
          <CircleCiIcon className="h-9 w-9 text-[#343434] dark:invert"/>
        </div>
        <div key="dagger" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Dagger
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with Dagger</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/dagger" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <DaggerIcon className="h-9 w-9 text-[#1d1d1b] dark:invert"/>
        </div>
        <div key="github-actions" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              GitHub Actions
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with GitHub Actions</p>
            <p className="mt-4"><Button href="/docs/cis/github-actions" variant="text" arrow="right">GitHub Actions Guides</Button></p>
          </div>
          <GitHubIcon className="h-9 w-9 text-[#181717] dark:invert"/>
        </div>
        <div key="gitlab" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Gitlab CI/CD
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with Gitlab CI</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/gitlab-ci" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <GitlabIcon className="h-9 w-9 text-[#FC6D26]"/>
        </div>
        <div key="google-cloud-build" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Google Cloud Build
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Google Cloud Build</p>
            <p className="mt-4"><Button href="/docs/cis/google-cloud-build" variant="text" arrow="right">Cloud Build Guides</Button></p>
          </div>
          <GoogleCloudIcon className="h-9 w-9 text-[#4285F4]"/>
        </div>
        <div key="jenkins" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Jenkins
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with Jenkins</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/jenkins" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <JenkinsIcon className="h-9 w-9 text-[#D24939]"/>
        </div>
        <div key="pulumi" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Pulumi
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with Pulumi</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/pulumi" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <PulumiIcon className="h-9 w-9 text-[#8A3391]"/>
        </div>
        <div key="travis-ci" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Travis CI
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">CI/CD in Node.js with Travis CI</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/travis-ci" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <TravisCiIcon className="h-9 w-9 text-[#3EAAAF]"/>
        </div>
      </div>
    </div>
  )
}
