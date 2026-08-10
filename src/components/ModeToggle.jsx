import { useEffect } from 'react'

function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none')
  window.setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none')
  }, 0)
}

function cycleThemeMode() {
  disableTransitionsTemporarily()

  let modes = window.__radarThemeMode?.modes || ['light', 'dark', 'storm']
  let current =
    window.__radarThemeMode?.resolve?.() ||
    window.localStorage.getItem('themeMode') ||
    'dark'
  let next = window.__radarThemeMode?.next
    ? window.__radarThemeMode.next(current)
    : modes[(modes.indexOf(current) + 1) % modes.length]

  window.localStorage.setItem('themeMode', next)
  if (window.__radarThemeMode?.apply) {
    window.__radarThemeMode.apply(next)
  } else {
    document.documentElement.classList.toggle('dark', next === 'dark' || next === 'storm')
    document.documentElement.classList.toggle('storm', next === 'storm')
  }
}

export function ModeToggle() {
  useEffect(() => {
    function handleKeyDown(event) {
      let target = event.target
      let tagName = target?.tagName

      if (
        target?.isContentEditable ||
        tagName === 'INPUT' ||
        tagName === 'TEXTAREA' ||
        tagName === 'SELECT'
      ) {
        return
      }

      if (
        event.key.toLowerCase() === 'm' &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.repeat
      ) {
        event.preventDefault()
        cycleThemeMode()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <button
      type="button"
      className="design-theme-control"
      aria-label="Cycle theme"
      onClick={cycleThemeMode}
    >
      <span className="design-kbd design-theme-control-key">M</span>
      <span className="design-theme-control-label">Cycle theme</span>
    </button>
  )
}
