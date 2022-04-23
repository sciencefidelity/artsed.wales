import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Sidebar from "components/sidebar"
import { aboutQuery } from "lib/queries"
import { Event, Label, Navigation, Page, Settings, Staff } from "lib/interfaces"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(aboutQuery)
  return {
    props: { data }
  }
}

const About = ({ data }) => {
  const { locale } = useRouter()
  const {
    coordinators,
    events,
    labels,
    navigation,
    pages,
    settings
  } = data as {
    coordinators: Staff[]
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
  }
  const coordinatorsSorted = coordinators.sort((a, b) =>
    a.title.split(" ").pop().localeCompare(b.title.split(" ").pop()))

  console.log(coordinators)
  return (
    <Layout navigation={navigation} settings={settings}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <div style={{marginRight: "3rem"}}>
          <h1>
            {locale === "cy" && pages[0].__i18n_refs
              ? pages[0].__i18n_refs.title
              : pages[0].title}
          </h1>
          <PortableText
            value={locale === "cy" && pages[0].__i18n_refs
              ? pages[0].__i18n_refs.body
              : pages[0].body}
            components={components}
          />
          <h2>Network Co-ordinators</h2>
          <ul style={{listStyleType: "none", padding: 0}}>
            {coordinatorsSorted.map(coordinator =>
              <li>{coordinator.title}</li>
            )}
          </ul>
        </div>
        <Sidebar
          events={events}
          title={labels[10].text}
        />
      </div>
    </Layout>
  )
}
export default About
