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
  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      settings={settings}
    >
      <section className={`${u.container}`}>
        <div className={`${s.eventsContent}`}>
          <PortableText
            value={locale === "cy" && pages[1].__i18n_refs
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
