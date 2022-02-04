import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { eventsQuery } from "lib/queries"
import Layout from "components/layout"
// import Localize from "components/localize"
import Event from "components/event"
import { EventsData } from "lib/interfaces"
import s from "pages/courses.module.scss"
// import u from "styles/utils.module.scss"

const Courses = ({ data }: { data: EventsData }) => {
  const { locale } = useRouter()
  const { events, site } = data
  return (
    <Layout
      site={site}
    >
        <h1>{locale === "cy" ? "Cyrsiau" : "Courses"}</h1>
        <article className={`${s.coursesContainer}`}>
          {events.map(event =>
            <div className={s.cardContainer} key={event._id}>
              <Event event={event} />
            </div>
          )}
        </article>
    </Layout>
  )
}
export default Courses

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(eventsQuery)
  return {
    props: { data }
  }
}
