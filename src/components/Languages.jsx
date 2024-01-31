import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

import { NodeIcon } from '@/components/icons/NodeIcon'
import { PhpIcon } from '@/components/icons/PhpIcon'
import { PythonIcon } from '@/components/icons/PythonIcon'
import { RubyIcon } from '@/components/icons/RubyIcon'
import { GoIcon } from '@/components/icons/GoIcon'
import { RustIcon } from '@/components/icons/RustIcon'
import { HerokuIcon } from '@/components/icons/HerokuIcon'

export function Languages() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="languages">
        Languages
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="nodejs" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Node.js
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Node.js</p>
            <p className="mt-1"><Button href="/docs/languages/nodejs" variant="text" arrow="right">Node.js Guides</Button></p>
          </div>
          <NodeIcon className="h-9 w-9 text-[#339933]"/>
        </div>
        <div key="python" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Python
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Python</p>
            <p className="mt-1"><Button href="/docs/languages/python" variant="text" arrow="right">Python Guides</Button></p>
          </div>
          <PythonIcon className="h-9 w-9 text-[#3776AB]"/>
        </div>
        <div key="ruby" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Ruby
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Ruby</p>
            <p className="mt-1"><Button href="/docs/languages/ruby" variant="text" arrow="right">Ruby Guides</Button></p>
          </div>
          <RubyIcon className="h-9 w-9 text-[#CC342D]"/>
        </div>
        <div key="go" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Go
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Go</p>
            <p className="mt-1"><Button href="/docs/languages/go" variant="text" arrow="right">Go Guides</Button></p>
          </div>
          <GoIcon className="h-10 w-10 text-[#00ADD8]"/>
        </div>
        <div key="php" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              PHP
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with PHP</p>
            <p className="mt-1"><Button href="/docs/languages/php" variant="text" arrow="right">PHP Guides</Button></p>
          </div>
          <PhpIcon className="h-10 w-10 text-[#777BB4]"/>
        </div>
        <div key="rust" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Rust
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use dotenvx with Rust</p>
            <p className="mt-1"><Button href="/docs/languages/rust" variant="text" arrow="right">Rust Guides</Button></p>
          </div>
          <RustIcon className="h-10 w-10 text-[#000000] dark:invert"/>
        </div>
      </div>
    </div>
  )
}
