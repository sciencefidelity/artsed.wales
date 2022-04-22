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
import reactStringReplace from "react-string-replace"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Date from "components/date"
import Link from "components/link"
// import Event from "components/event"
import ErrorTemplate from "components/errorTemplate"
import { eventQuery, eventPathQuery } from "lib/queries"
import { Event, Settings } from "lib/interfaces"
// import s from "pages/courses/event.module.scss"

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
const EventPage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
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
  const { event, settings } = data as {
    event: Event
    settings: Settings
  }
  return (
    <Layout
      settings={settings}
    >
      <section>
        <div>
          {event.title &&
            <h1>
              {locale === "cy" && event.__i18n_refs
                ? event.__i18n_refs.title
                : event.title}
            </h1>
          }
          <PortableText
            value={locale === "cy" && event.__i18n_refs
              ? event.__i18n_refs.body
              : event.body}
            components={components}
          />
          {event.facilitators && event.facilitators.map(facilitator =>
            <p key={facilitator._id}>
              {reactStringReplace(
                facilitator.job,
                facilitator.title,
                (match, i) => <strong>{match}</strong>)}
            </p>
          )}
          <p>
            <strong>Price: </strong>{event.price}<br />
            <strong>Date: </strong><Date date={event.dateStart} /><br />
            <strong>Venue: </strong>{event.location}<br />
            {event.keystage &&
              <>Suitable for {event.keystage.map((ks, idx) =>
                <>
                  {ks.title &&
                    <Link href={`/${ks._type}/${ks.slug}`} key={ks._id}>
                      {locale === "cy" && ks.__i18n_refs
                        ? ks.__i18n_refs.title
                        : ks.title}
                    </Link>
                  }
                  {idx === event.keystage.length - 1 && ""}
                  {idx === event.keystage.length - 2 && " and "}
                  {idx >= 0 && idx < event.keystage.length - 2 && ", "}
                </>
              )}</>
            }
          </p>
        </div>
      </section>
    </Layout>
  )
}
export default EventPage
