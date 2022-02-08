import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { eventsQuery } from "lib/queries"
import Layout from "components/layout"
import Event from "components/event"
import { LocaleString } from "generated/schema"
import { EventsData } from "lib/interfaces"
import s from "pages/courses.module.scss"
import u from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(eventsQuery)
  return {
    props: { data }
  }
}

const Courses = ({ data }: { data: EventsData }) => {
  const { events, site, statements } = data
  const title: LocaleString = {
    _type: "localeString",
    cy: "Cyrsiau",
    en: "Courses"
  }
  return (
    <Layout
      site={site}
      title={title}
      statements={statements}
    >
      <section
        className={`${s.coursesContainer} ${u.mbLarge}`}
        style={{ marginTop: "7rem" }}
      >
        {events.map(event =>
          <div className={s.cardContainer} key={event._id}>
            <Event event={event} />
          </div>
        )}
      </section>
    </Layout>
  )
}
export default Courses
