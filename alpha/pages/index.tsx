import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { localize } from "lib/utils"
import Layout from "components/layout"
import Localize from "components/localize"
import Sidebar from "components/sidebar"
import { indexQuery } from "lib/queries"
import { Engagement,
  Event,
  Label,
  Navigation,
  Page,
  Settings
} from "lib/interfaces"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}

const Home = ({ data }) => {
  const { locale } = useRouter()
  const { engagement, events, labels, navigation, pages, settings } = data as {
    engagement: Engagement
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
  }
  return (
    <Layout labels={labels} navigation={navigation} settings={settings}>
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
          {engagement.title && <h2><Localize data={engagement.title} /></h2>}
          {engagement.intro &&
            <div
              dangerouslySetInnerHTML={{
                __html: localize(engagement.intro, locale)
              }}
            />
          }
          {engagement.engagementFigure &&
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)"
            }}>
              {engagement.engagementFigure.map(figure =>
                <div>
                  <h3><Localize data={figure.title} /></h3>
                  <p>{figure.count}</p>
                </div>
              )}
            </div>
          }
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
