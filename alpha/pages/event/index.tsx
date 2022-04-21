import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { localize, urlFor } from "lib/utils"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import { eventsQuery } from "lib/queries"
import { LocaleEvent, Settings } from "lib/interfaces"
import Date from "components/date"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(eventsQuery)
  return {
    props: { data }
  }
}

const Home = ({ data }) => {
  const { locale } = useRouter()
  const { events, settings } = data as {
    events: LocaleEvent
    settings: Settings
  }
  const { en, cy } = events
  return (
    <Layout settings={settings}>
      <div>
        {locale === "cy" ? cy.map(event =>
          <>
            <h1>{event.title}</h1>
            <p>{event.summary}</p>
            <Date date={event.dateStart} />
          </>
        ) : cy.map(event =>
          <>
            <h1>{event.title}</h1>
            <p>{event.summary}</p>
            <Date date={event.dateStart} />
          </>
        )}
      </div>
    </Layout>
  )
}
export default Home
