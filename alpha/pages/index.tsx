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
import u from "styles/utils.module.scss"
import s from "styles/index.module.scss"
import p from "styles/patterns.module.scss"

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
      <div>
        <div className={`${s.hero} ${p.lines}`}>
          <div className={`${s.heroText}`}>
            Bringing together schools, artists and cultural organisations to support Expressive Arts learning.
          </div>
        </div>
        <div className={`${u.container}`}>
          <PortableText
            value={locale === "cy" && pages[1].__i18n_refs
              ? pages[1].__i18n_refs.body
              : pages[1].body}
            components={components}
          />
          {engagement.title && <h2><Localize data={engagement.title} /></h2>}
          {engagement.intro &&
            <p
              dangerouslySetInnerHTML={{
                __html: localize(engagement.intro, locale)
              }}
            />
          }
          {engagement.engagementFigure &&
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)"
            }}>
              {engagement.engagementFigure.map(figure =>
                <div>
                  <p>{figure.count}</p>
                  <h3 className={`${s.engagementFigure}`}>
                    <Localize data={figure.title} />
                  </h3>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    </Layout>
  )
}
export default Home
