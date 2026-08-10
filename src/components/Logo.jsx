export function Logo({ className = '' }) {
  return (
    <>
      <img
        src="/assets/img/logo-env.svg"
        alt="Dotenvx"
        className={`block dark:hidden ${className}`}
      />
      <img
        src="/assets/img/logo-env-yellow.svg"
        alt="Dotenvx"
        className={`hidden dark:block ${className}`}
      />
    </>
  )
}
