export function Logo({ className = "" }) {
  return (
    <>
      <img
        src="/assets/img/logo-dotenvx.svg"
        alt="Dotenvx"
        className={`block dark:hidden ${className}`}
      />
      <img
        src="/assets/img/logo-dotenvx-dark.svg"
        alt="Dotenvx"
        className={`hidden dark:block ${className}`}
      />
    </>
  )
}
