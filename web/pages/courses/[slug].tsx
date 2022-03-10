/**
 * Course component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/events`.
 *
 * @param data - all props fetched with `eventQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `eventPathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Event from "components/event"
import ErrorTemplate from "components/errorTemplate"
import { eventQuery, eventPathQuery } from "lib/queries"
import { EventData } from "lib/interfaces"
import s from "pages/courses/event.module.scss"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(eventPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(eventQuery, { slug })
  return {
    props: {
      data
    }
  }
}
const EventPage = ({ data }: { data: EventData }) => {
  console.log(data)
  const router = useRouter()
  if(router.isFallback) {
    return (
      <ErrorTemplate />
    )
  }
  if(!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const { event, site, statements } = data
  return (
    <Layout
      site={site}
      statements={statements}
      title={event.title}
    >
      <section>
        <div className={s.cardContainer}>
          <Event event={event} />
        </div>
      </section>
    </Layout>
  )
}
export default EventPage
