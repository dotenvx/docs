import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  let router = useRouter()
  let title = router.pathname === '/' ? 'dotenvx' : `${pageProps.title} | dotenvx`
  let url = `https://dotenvx.com${router.asPath}`
  let encodedUrl = encodeURIComponent(url)
  let imageUrl = `https://api.urlbox.io/v1/Ep4Ip4nNnFMNUg9J/png?url=${encodedUrl}&width=800&height=600&fail_on_4xx=true&fail_on_5xx=true`
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageProps.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageProps.description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dotenvx" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={pageProps.description} />
        {process.env.NODE_ENV === 'production' ? (
          <>
            <meta property="og:image" content={imageUrl} />
            <meta name="twitter:image" content={imageUrl} />
          </>
        ) : (
          <>
          </>
        )}
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
