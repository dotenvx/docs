export function PackageManagersBreadcrumb(props) {
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <h5><a href='/docs/package-managers'>Quickstart</a> {props.manager ? <span>› <a href={props.url}>{props.manager}</a></span> : <span></span>}</h5>
        </div>
        <div className="flex flex-shrink justify-end gap-2">
          {props.icon}
        </div>
      </div>
    </>
  )
}
