export function FeaturesBreadcrumb(props) {
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <h5><a href='/docs/features'>Features</a> {props.feature ? <span>› <a href={props.url}>{props.feature}</a></span> : <span></span>}</h5>
        </div>
        <div className="flex flex-shrink justify-end gap-2">
          {props.icon}
        </div>
      </div>
    </>
  )
}
