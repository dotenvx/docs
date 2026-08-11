import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getNavigationForPath } from '@/components/Navigation'

function PageLink({ label, page, previous = false }) {
  return (
    <Link
      href={page.href}
      aria-label={`${label}: ${page.title}`}
      className="design-btn"
    >
      {previous ? (
        <>
          <span aria-hidden="true">‹</span>
          <span>{page.title}</span>
        </>
      ) : (
        <>
          <span>{page.title}</span>
          <span aria-hidden="true">›</span>
        </>
      )}
    </Link>
  )
}

function PageNavigation() {
  let router = useRouter()
  let navigation = getNavigationForPath(router.pathname)
  let flattenLinks = (links) =>
    links.flatMap((link) => [
      ...(link.footer === false ? [] : [link]),
      ...flattenLinks(link.links ?? []),
    ])
  let uniquePages = (pages) => {
    let seen = new Set()
    return pages.filter((page) => {
      if (seen.has(page.href)) {
        return false
      }

      seen.add(page.href)
      return true
    })
  }
  let allPages = uniquePages(navigation.flatMap((group) => flattenLinks(group.links ?? [])))
  let currentPageIndex = allPages.findIndex(
    (page) => page.href === router.pathname
  )

  let previousPage = currentPageIndex === -1 ? undefined : allPages[currentPageIndex - 1]
  let nextPage = currentPageIndex === -1 ? undefined : allPages[currentPageIndex + 1]

  useEffect(() => {
    let handleKeyDown = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
        return
      }

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

      if (event.key === 'ArrowLeft' && previousPage) {
        event.preventDefault()
        router.push(previousPage.href)
      } else if (event.key === 'ArrowRight' && nextPage) {
        event.preventDefault()
        router.push(nextPage.href)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextPage, previousPage, router])

  if (currentPageIndex === -1 || (!previousPage && !nextPage)) {
    return null
  }

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${
        previousPage && nextPage
          ? 'sm:justify-between'
          : nextPage
            ? 'sm:justify-end'
            : ''
      }`}
    >
      {previousPage && (
        <PageLink label="Previous" page={previousPage} previous />
      )}
      {nextPage && <PageLink label="Next" page={nextPage} />}
    </div>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  )
}

function SocialLink({ href, icon: Icon, children, className = "h-5 w-5" }) {
  return (
    <Link href={href} className="group">
      <span className="sr-only">{children}</span>
      <Icon className={`${className} fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500`} />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-end gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
      <div className="flex gap-4">
        <SocialLink href="https://x.com/dotenvx" icon={XIcon} className="h-4 w-4">
          Follow us on X
        </SocialLink>
        <SocialLink href="https://github.com/dotenvx/dotenvx" icon={GitHubIcon} className="h-[18px] w-[18px]">
          Follow us on GitHub
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer({ wide = false }) {
  return (
    <footer className={`${wide ? 'max-w-5xl' : 'max-w-2xl'} space-y-10 pb-16`}>
      <PageNavigation />
      <SmallPrint />
    </footer>
  )
}
