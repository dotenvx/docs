export function QuickstartsBreadcrumb(props) {
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <h5><a href='/docs/quickstart'>Quickstart</a> {props.quickstart ? <span>› <a href={props.url}>{props.quickstart}</a></span> : <span></span>}</h5>
        </div>
        <div className="flex flex-shrink justify-end gap-2">
          {props.icon}
        </div>
      </div>
    </>
  )
}
