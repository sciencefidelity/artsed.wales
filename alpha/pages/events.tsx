import { Fragment } from "react"
import { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { Layout } from "components/layout"
import { SingleEvent } from "components/singleEvent"
import { eventsQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Page,
  Settings,
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/events.module.scss"

interface Data {
  company: Company
  events: Event[]
  eventsPast: Event[]
  labels: Label[]
  navigation: Navigation
  pages: Page[]
  settings: Settings
}

interface Props {
  data: Data
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Data = await sanityClient.fetch(eventsQuery)
  return {
    props: { data },
  }
}

/**
 * Events: The Events page
 * @param data - Data from the Sanity API
 * @returns The JSX Code for the Events Page
 */
const Events: NextPage<Props> = ({ data }: Props) => {
  const { locale } = useRouter()
  const { company, events, eventsPast, labels, navigation, pages, settings } =
    data as {
      company: Company
      events: Event[]
      eventsPast: Event[]
      labels: Label[]
      navigation: Navigation
      pages: Page[]
      settings: Settings
    }

  const pageHead = {
    title:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.meta?.title
        : pages[2].meta?.title,
    description:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.meta?.description
        : pages[2].meta?.description,
    ogTitle:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.facebook?.title
        : pages[2].facebook?.title,
    ogDescription:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.facebook?.description
        : pages[2].facebook?.description,
    ogURL:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.meta?.canonicalURL
        : pages[2].meta?.canonicalURL,
    ogImage:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.facebook?.image
        : pages[2].facebook?.image,
    twitterTitle:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.twitter?.title
        : pages[2].twitter?.title,
    twitterDescription:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.twitter?.description
        : pages[2].twitter?.description,
    twitterImage:
      locale === "cy" && pages[2].__i18n_refs
        ? pages[2].__i18n_refs.twitter?.image
        : pages[2].twitter?.image,
  }

  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      pageHead={pageHead}
      settings={settings}
    >
      <section className={`${u.container}`}>
        <div className={`${s.content}`}>
          <PortableText
            value={
              locale === "cy" && pages[2].__i18n_refs
                ? pages[2].__i18n_refs.body
                : pages[2].body
            }
            components={components}
          />
        </div>
        <div className={`${s.events}`}>
          {events.map((event) => (
            <Fragment key={event._id}>
              <SingleEvent event={event} />
            </Fragment>
          ))}
        </div>
        <h2 className={s.heading}>Past Events</h2>
        <div className={`${s.events}`}>
          {eventsPast.map((event) => (
            <Fragment key={event._id}>
              <SingleEvent event={event} />
            </Fragment>
          ))}
        </div>
        <hr />
      </section>
    </Layout>
  )
}
export default Events
