export function CisBreadcrumb(props) {
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <h5><a href='/docs#cis'>CI/CDs</a></h5>
        </div>
        <div className="flex flex-shrink justify-end gap-2">
          {props.icon}
        </div>
      </div>
    </>
  )
}
