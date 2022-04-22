import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { keyStage } from "lib/utils"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Checkboxes from "components/checkboxes"
import EventDate from "components/eventDate"
import Link from "components/link"
import { eventsQuery } from "lib/queries"
import { Event, Keystage, Navigation, Settings, Staff } from "lib/interfaces"
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
  const { events, facilitators, keystages, navigation, settings } = data as {
    events: Event[]
    keystages: Keystage[]
    navigation: Navigation
    settings: Settings
    facilitators: Staff[]
  }
  const res = facilitators.sort((a, b) =>
    a.title.split(" ").pop().localeCompare(b.title.split(" ").pop()))
  return (
    <Layout navigation={navigation} settings={settings}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <section>
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
              {event.dateStart &&
                <EventDate
                  dateEnd={event.dateEnd}
                  dateStart={event.dateStart}
                />
              }
            </div>
          )}
        </section>
        <div>
          <h2>Filters</h2>
          <Checkboxes
            data={keystages}
            title={locale === "cy" ? "Cyfnod Allweddol" : "Key Stage"}
          />
          <Checkboxes
            data={res}
            title={locale === "cy" ? "Hwylusydd" : "Facilitator"}
          />
        </div>
      </div>
    </Layout>
  )
}
export default Home
