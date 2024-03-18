export function ProcessManagersBreadcrumb(props) {
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <h5><a href='/docs/process-managers'>Process Managers</a> {props.processManager ? <span>› <a href={props.url}>{props.processManager}</a></span> : <span></span>}</h5>
        </div>
        <div className="flex flex-shrink justify-end gap-2">
          {props.icon}
        </div>
      </div>
    </>
  )
}
