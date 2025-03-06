import Image from 'next/image'

export function ScreenshotBrowser(props) {
  return (
    <div className={`w-full ${props.width}`}>
      <div className="border border-zinc-300 dark:border-zinc-800 text-zinc-100 text-sm subpixel-antialiased rounded-lg leading-normal overflow-hidden shadow-lg">
        <div className="p-0 bg-zinc-200 dark:bg-black border-b border-zinc-300 dark:border-zinc-800">
          <div className="flex py-1 px-2">
            <div className="flex items-center space-x-1.5">
              <span className="h-2 w-2 bg-red-500/70 dark:bg-red-500/30 rounded-full"></span>
              <span className="h-2 w-2 bg-orange-300/70 dark:bg-orange-300/30 rounded-full"></span>
              <span className="h-2 w-2 bg-green-500/70 dark:bg-green-500/30 rounded-full"></span>
            </div>
            <div className="text-right w-full text-zinc-400 text-xs">
              {props.www}
            </div>
          </div>
        </div>
        <div className="p-0">
          <a href={props.url} target="_blank" rel="noreferrer" className="hover:brightness-105">
            <Image
              src={props.url}
              width="0"
              height="0"
              alt=""
              className="p-0 m-0 w-full"
              unoptimized
            />
          </a>
        </div>
      </div>
    </div>
  )
}
