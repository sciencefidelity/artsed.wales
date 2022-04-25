import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import SingleEvent from "components/singleEvent"
import { eventsQuery } from "lib/queries"
import { Event, Label, Navigation, Settings } from "lib/interfaces"
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
    events,
    labels,
    navigation,
    settings
  } = data as {
    events: Event[]
    labels: Label[]
    navigation: Navigation
    settings: Settings
  }

  return (
    <Layout labels={labels} navigation={navigation} settings={settings}>
      <div className={`${s.events}`}>
        <section>
          {events.map(event =>
            <SingleEvent event={event} />
          )}
        </section>
      </div>
    </Layout>
  )
}
export default Home
