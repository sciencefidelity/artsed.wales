import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { localize } from "lib/utils"
import Highlight from "components/icons/highlight"
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
          <h2
            className={`${s.heroText}`}
            dangerouslySetInnerHTML={{
              __html: localize(labels[21].text, locale)
            }}
          />
        </div>
        <div className={`${u.container}`}>
          <div className={`${s.indexContent}`}>
            <PortableText
              value={locale === "cy" && pages[1].__i18n_refs
                ? pages[1].__i18n_refs.body
                : pages[1].body}
              components={components}
            />
          </div>
          <hr />
          <div className={`${s.indexEngagement}`}>
            {engagement.intro &&
              <p
                dangerouslySetInnerHTML={{
                  __html: localize(engagement.intro, locale)
                }}
              />
            }
          </div>
            {engagement.engagementFigure &&
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)"
              }}>
              {engagement.engagementFigure.map(figure =>
                <div className={`${s.engagementFigures}`}>
                  <figure>{figure.count}</figure>
                  <h3 className={`${u.uppercase}`}>
                    <Localize data={figure.title} />
                  </h3>
                </div>
              )}
              </div>
            }
            <hr />
        </div>
      </div>
    </Layout>
  )
}
export default Home
