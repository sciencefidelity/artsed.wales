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
import EventDate from "components/eventDate"
import Link from "components/link"
import Localize from "components/localize"
// import Event from "components/event"
import ErrorTemplate from "components/errorTemplate"
import { eventQuery, eventPathQuery } from "lib/queries"
import { Event, Label, Navigation, Settings } from "lib/interfaces"
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
  const { event, events, labels, navigation, settings } = data as {
    event: Event
    events: Event[]
    navigation: Navigation
    settings: Settings
    labels: Label[]
  }
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
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
            {event.facilitators && <h3><Localize data={labels[7].text} /></h3>}
            <p>
              {event.facilitators && event.facilitators.map(facilitator =>
                <>
                  <span key={facilitator._id}>
                    {reactStringReplace(
                      locale === "cy" && facilitator.__i18n_refs.job
                        ? facilitator.__i18n_refs.job
                        : facilitator.job
                          ? facilitator.job
                          : facilitator.title,
                      facilitator.title,
                      match =>
                        <strong>
                          <Link
                            href={`/${facilitator._type}/${facilitator.slug}`}
                          >
                            {match}
                          </Link>
                        </strong>
                    )}
                  </span>
                  <br />
                </>
              )}
            </p>
            <p>
              <strong><Localize data={labels[4].text} />: </strong>
              £{event.price.toString()}<br />
              <strong><Localize data={labels[5].text} />: </strong>
              <EventDate
                dateEnd={event.dateEnd}
                dateStart={event.dateStart}
              /><br />
              <strong><Localize data={labels[6].text} />: </strong>
              {event.location}<br />
              {event.keystage &&
                <>
                  <Localize data={labels[8].text} />
                  {" "}{event.keystage.map((ks, idx) =>
                  <>
                    {ks.title &&
                      <Link href={`/${ks._type}/${ks.slug}`} key={ks._id}>
                        {locale === "cy" && ks.__i18n_refs
                          ? ks.__i18n_refs.title
                          : ks.title}
                      </Link>
                    }
                    {idx === event.keystage.length - 1 && ""}
                    {idx === event.keystage.length - 2 &&
                      <Localize data={labels[9].text} />
                    }
                    {idx >= 0 && idx < event.keystage.length - 2 && ", "}
                  </>
                )}</>
              }
            </p>
          </div>
        </section>
        <aside>
          <h2>Upcoming Events</h2>
          <ul style={{
            listStyleType: "none",
            padding: 0
          }}>
            {events.filter(e => e.title !== event.title).map(e =>
              <li key={e._id} style={{ marginBottom: "1.5rem" }}>
                <Date date={e.dateStart} /><br />
                <Link href={`/${e._type}/${e.slug}`}>
                  {locale === "cy" && e.__i18n_refs
                    ? e.__i18n_refs.title
                    : e.title}
                </Link><br />
                {locale === "cy" && e.__i18n_refs
                  ? e.__i18n_refs.summary
                  : e.summary}
              </li>
            )}
          </ul>
        </aside>
      </div>
    </Layout>
  )
}
export default EventPage
