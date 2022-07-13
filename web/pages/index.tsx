import { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanity-client"
import { localize } from "lib/utils"
import { EngagementSection } from "components/engagementSection"
import { FeaturedEvents } from "components/featuredEvents"
import { Layout } from "components/layout"
import { QuoteSection } from "components/quoteSection"
import { VideoPlayer } from "components/videoPlayer"
import { indexQuery } from "lib/queries"
import {
  Company,
  Engagement,
  Event,
  Label,
  Navigation,
  Page,
  Quote,
  Settings,
  Video,
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/index.module.scss"
import p from "styles/patterns.module.scss"

interface Data {
  company: Company
  engagement: Engagement
  events: Event[]
  labels: Label[]
  navigation: Navigation
  pages: Page[]
  quotes: Quote[]
  settings: Settings
  videos: Video[]
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Data = await sanityClient.fetch(indexQuery)
  return {
    props: { data },
  }
}

/**
 * Home: The Landing page of the web app
 * @param data - Data from the Sanity API
 * @returns The JSX Code for the Home Page
 */
const Home: NextPage = ({ data }: { data: Data }) => {
  const { locale } = useRouter()
  const {
    company,
    engagement,
    events,
    labels,
    navigation,
    pages,
    quotes,
    settings,
    videos,
  } = data

  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      settings={settings}
    >
      <div>
        <section className={`${s.hero} ${p.lines}`}>
          <h2
            className={`${s.heroText}`}
            // TODO: make this less dangerous
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: localize(labels[21].text, locale),
            }}
          />
        </section>
        <div className={`${u.container}`}>
          <section>
            <article className={`${s.indexContent}`}>
              <PortableText
                value={
                  locale === "cy" && pages[0].__i18n_refs
                    ? pages[0].__i18n_refs.body
                    : pages[0].body
                }
                components={components}
              />
            </article>
            <VideoPlayer video={videos[0]} />
          </section>
          <hr />
          <EngagementSection engagement={engagement} />
          <QuoteSection label={labels[27]} quotes={quotes} />
          <hr />
          <FeaturedEvents
            events={events.filter((event) => event.feature)}
            label={labels[26]}
          />
          <hr />
        </div>
      </div>
    </Layout>
  )
}
export default Home
