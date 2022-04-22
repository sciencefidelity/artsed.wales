import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { localize, urlFor } from "lib/utils"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import { eventsQuery } from "lib/queries"
import { Event, Settings } from "lib/interfaces"
import Date from "components/date"
import Link from "components/link"
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
    events: Event[]
    settings: Settings
  }
  return (
    <Layout settings={settings}>
      <div>
        {events.map(event =>
          <div key={event._id}>
            {event.title &&
              <h1>
                <Link href={`/${event._type}/${event.slug}`}>
                  {locale === "cy" && event.__i18n_refs
                    ? event.__i18n_refs.title
                    : event.title}
                </Link>
              </h1>
            }
            {event.summary &&
              <p>
                {locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.summary
                  : event.summary}
              </p>
            }
            {event.dateStart && <Date date={event.dateStart} />}
          </div>
        )}
      </div>
    </Layout>
  )
}
export default Home
