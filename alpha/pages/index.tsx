import { Fragment, useState } from "react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { CountUp } from "use-count-up"
import { Waypoint } from "react-waypoint"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { localize } from "lib/utils"
import Layout from "components/layout"
import Localize from "components/localize"
import SingleEvent from "components/singleEvent"
import { indexQuery } from "lib/queries"
import {
  Company,
  Engagement,
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
  const [isCounting, setIsCounting] = useState(false)
  const { locale } = useRouter()
  const {
    company,
    engagement,
    events,
    labels,
    navigation,
    pages,
    settings
  } = data as {
    company: Company
    engagement: Engagement
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
  }

  const countUpProps = {
    isCounting,
    onComplete: () => setIsCounting(false)
  }
  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      settings={settings}
    >
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
              value={locale === "cy" && pages[0].__i18n_refs
                ? pages[0].__i18n_refs.body
                : pages[0].body}
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
          <Waypoint onEnter={() => setIsCounting(true)} />
          {engagement.engagementFigure &&
            <div className={`${s.engagement} ${u.grid}`}>
              {engagement.engagementFigure.map(figure =>
                <div className={`${s.engagementFigures}`} key={figure._key}>
                  <span className={`${s.number} ${u.mono}`}>
                    <CountUp
                      {...countUpProps}
                      end={figure.count}
                      duration={2}
                    />
                  </span>
                  <h3 className={`${u.uppercase} ${s.h3}`}>
                    <Localize data={figure.title} />
                  </h3>
                </div>
              )}
            </div>
          }
          <Waypoint onEnter={() => setIsCounting(true)} />
          <hr />
          <section>
            <h2 className={`${s.featuredTitle} ${u.uppercase}`}>
              <Localize data={labels[10].text} />
            </h2>
            <div className={`${s.featured} ${u.grid}`}>
              {events.filter(event => event.feature).map(event =>
                <Fragment key={event._id}>
                  <SingleEvent event={event} />
                </Fragment>
              )}
            </div>
          </section>
          <hr />
        </div>
      </div>
    </Layout>
  )
}
export default Home
