import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

function isCompanyPath(pathname) {
  return (
    pathname === '/contact' ||
    pathname === '/opensource' ||
    pathname === '/open-source' ||
    pathname === '/changelog'
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export function RadarNav() {
  let router = useRouter()
  let pathname = router.pathname || ''
  let docsActive = pathname === '/docs' || pathname.startsWith('/docs/')
  let companyActive = isCompanyPath(pathname)

  let [companyOpen, setCompanyOpen] = useState(false)
  let [mobileOpen, setMobileOpen] = useState(false)
  let [mobileSubmenu, setMobileSubmenu] = useState(null)
  let closeTimer = useRef(null)
  let desktopNavRef = useRef(null)
  let flyoutRef = useRef(null)

  function clearClose() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function openCompany() {
    clearClose()
    setCompanyOpen(true)
  }

  function closeCompany() {
    setCompanyOpen(false)
  }

  function scheduleClose() {
    clearClose()
    closeTimer.current = window.setTimeout(closeCompany, 140)
  }

  function setMobileMenuOpen(isOpen) {
    setMobileOpen(isOpen)
    document.body.classList.toggle('overflow-hidden', isOpen)
    if (!isOpen) setMobileSubmenu(null)
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        closeCompany()
      }
    }

    function onPointerMove(event) {
      if (!companyOpen) return
      let target = event.target
      if (
        (desktopNavRef.current && desktopNavRef.current.contains(target)) ||
        (flyoutRef.current && flyoutRef.current.contains(target))
      ) {
        clearClose()
        return
      }
      scheduleClose()
    }

    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointermove', onPointerMove)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointermove', onPointerMove)
      clearClose()
      document.body.classList.remove('overflow-hidden')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companyOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
    closeCompany()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <header
        className={clsx('radar-chrome', mobileOpen && 'is-mobile-open')}
        aria-label="Site"
      >
        <div className="radar-topbar">
          <div className="radar-topbar-left">
            <a href="/" className="radar-brand" aria-label="dotenvx home">
              <img
                src="/assets/img/logo-env.svg"
                className="radar-brand-light"
                alt=""
                aria-hidden="true"
              />
              <img
                src="/assets/img/logo-env-yellow.svg"
                className="radar-brand-dark"
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>

          <nav
            className="radar-topbar-center"
            ref={desktopNavRef}
            aria-label="Primary"
            onMouseLeave={scheduleClose}
          >
            <a
              href="/"
              className={clsx(
                'radar-nav-link',
                (pathname === '/' || pathname === '') && 'is-active'
              )}
            >
              Dotenvx
            </a>
            <a
              href="/armor"
              className={clsx(
                'radar-nav-link',
                (pathname === '/armor' || pathname.startsWith('/armor/')) &&
                  'is-active'
              )}
            >
              Armor <span aria-hidden="true">⛨</span>
            </a>

            <div
              className="radar-nav-item"
              {...(companyOpen ? { 'data-nav-active': '' } : {})}
              onMouseEnter={openCompany}
              onFocus={openCompany}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className={clsx(
                  'radar-nav-link radar-nav-trigger',
                  companyActive && 'is-active'
                )}
                aria-haspopup="true"
                aria-expanded={companyOpen ? 'true' : 'false'}
                onClick={() =>
                  companyOpen ? closeCompany() : openCompany()
                }
              >
                <span>Company</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="radar-nav-caret"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
            </div>

            <a
              href="/pricing"
              className={clsx(
                'radar-nav-link',
                (pathname === '/pricing' ||
                  pathname.startsWith('/pricing/')) &&
                  'is-active'
              )}
            >
              Pricing
            </a>
            <a
              href="/docs"
              className={clsx('radar-nav-link', docsActive && 'is-active')}
            >
              Docs
            </a>
          </nav>

          <div className="radar-topbar-right">
            <a
              href="/login"
              className="radar-nav-link radar-nav-login"
              data-umami-event="Login link"
            >
              Log In
            </a>
            <a
              href="https://github.com/dotenvx/dotenvx"
              target="_blank"
              rel="noopener noreferrer"
              className="radar-nav-icon"
              aria-label="GitHub repository"
              data-umami-event="GitHub repository link"
            >
              <GitHubIcon />
            </a>
            <button
              type="button"
              className="radar-mobile-toggle"
              aria-expanded={mobileOpen ? 'true' : 'false'}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileOpen)}
            >
              <svg
                className={clsx(
                  'radar-mobile-icon-open',
                  mobileOpen && 'hidden'
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
              <svg
                className={clsx(
                  'radar-mobile-icon-close',
                  !mobileOpen && 'hidden'
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6l-12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={flyoutRef}
          className={clsx('radar-nav-flyout', companyOpen && 'is-open')}
          aria-hidden={companyOpen ? 'false' : 'true'}
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        >
          <div className="radar-nav-flyout-frame">
            <div className="radar-nav-panel is-active">
              <div className="radar-nav-panel-links">
                <a
                  href="/opensource"
                  className={clsx(
                    'radar-nav-panel-link',
                    pathname === '/opensource' && 'is-active'
                  )}
                >
                  Open Source
                </a>
                <a
                  href="/changelog"
                  className={clsx(
                    'radar-nav-panel-link',
                    pathname === '/changelog' && 'is-active'
                  )}
                >
                  Changelog
                </a>
                <a
                  href="/contact"
                  className={clsx(
                    'radar-nav-panel-link',
                    pathname === '/contact' && 'is-active'
                  )}
                >
                  Contact
                </a>
                <a
                  href="https://trust.dotenvx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="radar-nav-panel-link"
                >
                  Trust
                </a>
              </div>
              <a href="/contact" className="radar-nav-office">
                <img
                  src="/dotenvx-la-office-crt.png"
                  alt="dotenvx Los Angeles office"
                  className="radar-nav-office-image"
                  loading="lazy"
                />
                <span className="radar-nav-office-copy">
                  <span className="radar-nav-office-label">Office</span>
                  <span className="radar-nav-office-line">
                    2450 Colorado Ave #100
                  </span>
                  <span className="radar-nav-office-line radar-nav-office-line--dim">
                    Santa Monica, CA 90404
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className="radar-mobile-overlay"
        hidden={!mobileOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) setMobileMenuOpen(false)
        }}
      >
        <div className="radar-mobile-sheet">
          <div className="radar-mobile-actions">
            <a href="/login" className="design-btn design-btn--block">
              Log In
            </a>
          </div>

          <nav
            className="radar-mobile-list"
            aria-label="Primary mobile"
            hidden={!!mobileSubmenu}
          >
            <a href="/" className="radar-mobile-link">
              Dotenvx <span aria-hidden="true">◈</span>
            </a>
            <a href="/armor" className="radar-mobile-link">
              Armor <span aria-hidden="true">⛨</span>
            </a>
            <button
              type="button"
              className="radar-mobile-link radar-mobile-subtrigger"
              onClick={() => setMobileSubmenu('company')}
            >
              <span>Company</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="/pricing" className="radar-mobile-link">
              Pricing
            </a>
            <a href="/docs" className="radar-mobile-link">
              Docs
            </a>
          </nav>

          <div
            className="radar-mobile-list"
            hidden={mobileSubmenu !== 'company'}
          >
            <button
              type="button"
              className="radar-mobile-link radar-mobile-subtrigger"
              onClick={() => setMobileSubmenu(null)}
            >
              <span>
                <span aria-hidden="true">←</span> Company
              </span>
            </button>
            <a href="/opensource" className="radar-mobile-link">
              Open Source
            </a>
            <a href="/changelog" className="radar-mobile-link">
              Changelog
            </a>
            <a href="/contact" className="radar-mobile-link">
              Contact
            </a>
            <a
              href="https://trust.dotenvx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="radar-mobile-link"
            >
              Trust
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
