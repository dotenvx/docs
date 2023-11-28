import Head from 'next/head'

export function HeadRedirect({ url }) {
  return (
    <Head>
      <link rel="canonical" href={url} />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta httpEquiv="refresh" content={`0;url=${url}`} />
    </Head>
  )
}
