export function FrameworksBreadcrumb(props) {
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <h5><a href='/docs#frameworks'>Frameworks</a> {props.framework ? <span>› <a href={props.url}>{props.framework}</a></span> : <span></span>}</h5>
        </div>
        <div className="flex flex-shrink justify-end gap-2">
          {props.icon}
        </div>
      </div>
    </>
  )
}
