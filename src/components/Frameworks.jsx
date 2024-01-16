import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

import { FrameworksNodejs } from '@/components/FrameworksNodejs'
import { FrameworksPython } from '@/components/FrameworksPython'
import { FrameworksRuby } from '@/components/FrameworksRuby'
import { FrameworksPhp } from '@/components/FrameworksPhp'
import { FrameworksRust } from '@/components/FrameworksRust'

export function Frameworks() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="frameworks">
        Frameworks
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <FrameworksNodejs />
        <FrameworksPython />
        <FrameworksRuby />
        <FrameworksRust />
      </div>
    </div>
  )
}
