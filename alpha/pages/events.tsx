import { Fragment } from "react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import SingleEvent from "components/singleEvent"
import { eventsQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Page,
  Settings
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/events.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(eventsQuery)
  return {
    props: { data }
  }
}

const Home = ({ data }) => {
  const { locale } = useRouter()
  const {
    company,
    events,
    labels,
    navigation,
    pages,
    settings
  } = data as {
    company: Company
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
  }

  const pageHead = {
    title: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.meta?.title
      : pages[1].meta?.title,
    description: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.meta?.description
      : pages[1].meta?.description,
    ogTitle: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.facebook?.title
      : pages[1].facebook?.title,
    ogDescription: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.facebook?.description
      : pages[1].facebook?.description,
    ogURL: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.meta?.canonicalURL
      : pages[1].meta?.canonicalURL,
    ogImage: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.facebook?.image
      : pages[1].facebook?.image,
    twitterTitle: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.twitter?.title
      : pages[1].twitter?.title,
    twitterDescription: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.twitter?.description
      : pages[1].twitter?.description,
    twitterImage: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.twitter?.image
      : pages[1].twitter?.image
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
        <div className={`${s.eventsContent}`}>
          <PortableText
            value={locale === "cy" && pages[2].__i18n_refs
              ? pages[2].__i18n_refs.body
              : pages[2].body}
            components={components}
          />
        </div>
        <div className={`${s.events}`}>
          {events.map((event, idx) =>
            <Fragment key={event._id}>
              <SingleEvent event={event} idx={idx} />
            </Fragment>
          )}
        </div>
      <hr />
      </section>
    </Layout>
  )
}
export default Home
