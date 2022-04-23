import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Sidebar from "components/sidebar"
import { indexQuery } from "lib/queries"
import { Event, Label, Navigation, Page, Settings } from "lib/interfaces"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}

const Home = ({ data }) => {
  const { locale } = useRouter()
  const { events, labels, navigation, pages, settings } = data as {
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
  }
  return (
    <Layout navigation={navigation} settings={settings}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <div style={{marginRight: "3rem"}}>
          <h1>
            {locale === "cy" && pages[1].__i18n_refs
              ? pages[1].__i18n_refs.title
              : pages[1].title}
          </h1>
          <PortableText
            value={locale === "cy" && pages[1].__i18n_refs
              ? pages[1].__i18n_refs.body
              : pages[1].body}
            components={components}
          />
        </div>
        <Sidebar
          events={events}
          title={labels[10].text}
        />
      </div>
    </Layout>
  )
}
export default Home
