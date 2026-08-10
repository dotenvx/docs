import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const modeScript = `
  (function () {
    var MODES = ['light', 'dark', 'storm']

    function resolveThemeMode() {
      var stored = localStorage.getItem('themeMode')
      if (MODES.indexOf(stored) !== -1) return stored

      // Migrate legacy docs toggle
      if (localStorage.getItem('isDarkMode') === 'true') return 'dark'
      if (localStorage.getItem('isDarkMode') === 'false') return 'light'

      return 'dark'
    }

    function applyThemeMode(mode) {
      var root = document.documentElement
      root.classList.toggle('dark', mode === 'dark' || mode === 'storm')
      root.classList.toggle('storm', mode === 'storm')
      var meta = document.querySelector('meta[name="theme-color"]')
      if (meta) {
        meta.setAttribute(
          'content',
          mode === 'storm' ? '#14171c' : mode === 'dark' ? '#0a0a0a' : '#e4e7e6'
        )
      }
      try {
        window.dispatchEvent(new CustomEvent('radar:theme-change', { detail: { mode: mode } }))
      } catch (e) {}
    }

    function disableTransitionsTemporarily() {
      document.documentElement.classList.add('[&_*]:!transition-none')
      window.setTimeout(function () {
        document.documentElement.classList.remove('[&_*]:!transition-none')
      }, 0)
    }

    window.__radarThemeMode = window.__radarThemeMode || {}
    window.__radarThemeMode.modes = MODES
    window.__radarThemeMode.resolve = resolveThemeMode
    window.__radarThemeMode.apply = applyThemeMode
    window.__radarThemeMode.next = function (mode) {
      var i = MODES.indexOf(mode)
      return MODES[(i + 1) % MODES.length]
    }
    window.__radarThemeMode.prev = function (mode) {
      var i = MODES.indexOf(mode)
      return MODES[(i - 1 + MODES.length) % MODES.length]
    }

    try {
      var mode = resolveThemeMode()
      if (!localStorage.getItem('themeMode')) localStorage.setItem('themeMode', mode)
      applyThemeMode(mode)
    } catch (e) {
      document.documentElement.classList.add('dark')
    }

    window.addEventListener('storage', function () {
      disableTransitionsTemporarily()
      applyThemeMode(resolveThemeMode())
    })
  })()
`

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <meta name="theme-color" content="#0a0a0a" />
      </Head>
      <body className="design-body antialiased">
        <Main />
        <NextScript />
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://1.dotenvx.com/script.js"
            data-website-id="5c4c9a9b-ba1c-4bae-a734-3a1fe609c5a5"
            strategy="lazyOnload"
          />
        )}
      </body>
    </Html>
  )
}
