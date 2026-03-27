import { HeadRedirect } from '@/components/HeadRedirect'

export default function CliReferenceIndexPage() {
  return (
    <>
      <HeadRedirect url="/docs/cli-reference/introduction" />

      <h1>Redirecting</h1>
      <a href="/docs/cli-reference/introduction">Click here if you are not redirected.</a>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'CLI Reference',
      description: 'CLI Reference',
    },
  }
}
