import { GetStaticProps } from "next"
// import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { eventsQuery } from "lib/queries"
import Layout from "components/layout"
// import Localize from "components/localize"
import Event from "components/event"
import SignUp from "components/signUp"
import { EventsData } from "lib/interfaces"
import s from "pages/courses.module.scss"
import u from "styles/utils.module.scss"

const Courses = ({ data }: { data: EventsData }) => {
{/*   const { locale } = useRouter() */}
  const { events, site, statements } = data
  const title = {
    cy: "Cyrsiau",
    en: "Courses"
  }
  return (
    <Layout
      site={site}
      title={title}
    >
{/*         <h1>{locale === "cy" ? title.cy : title.en}</h1> */}
        <section className={`${s.coursesContainer} ${u.mbLarge}`} style={{ marginTop: "7rem" }}>
          {events.map(event =>
            <div className={s.cardContainer} key={event._id}>
              <Event event={event} />
            </div>
          )}
        </section>
        <SignUp
          site={site}
          statements={statements}
        />
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
