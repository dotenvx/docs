export function Video(props) {
  return (
    <section className="not-prose mt-12 border-t border-zinc-900/10 pt-8 dark:border-white/10">
      <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-white">
        Watch it in action
      </h2>
      <div className="rounded-md border border-zinc-200 dark:border-zinc-700">
        <video controls poster={props.poster} className="m-0 aspect-video w-full rounded-md shadow-lg">
          <source src={props.mp4} type="video/mp4" />
          <source src={props.webm} type="video/webm" />
          Download the <a href={props.mp4}>mp4</a> <a href={props.webm}>webm</a> video.
        </video>
      </div>
    </section>
  )
}
