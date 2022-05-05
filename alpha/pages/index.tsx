import { Fragment, useState } from "react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
// import { CountUp } from "use-count-up"
// import { Waypoint } from "react-waypoint"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { localize, urlFor } from "lib/utils"
import { EngagementSection } from "components/engagementSection"
import Layout from "components/layout"
import Localize from "components/localize"
import SingleEvent from "components/singleEvent"
import VideoPlayer from "components/videoPlayer"
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
  Video
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
  const [quoteNumber, setQuoteNumber] = useState(0)
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
    videos
  } = data as {
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

  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      settings={settings}
    >
      <div>
        {/* hero */}
        <section className={`${s.hero} ${p.lines}`}>
          <h2
            className={`${s.heroText}`}
            dangerouslySetInnerHTML={{
              __html: localize(labels[21].text, locale)
            }}
          />
        </section>

        <div className={`${u.container}`}>
          {/* intro section */}
          <section>
            {/* intro text */}
            <article className={`${s.indexContent}`}>
              <PortableText
                value={locale === "cy" && pages[0].__i18n_refs
                  ? pages[0].__i18n_refs.body
                  : pages[0].body}
                components={components}
              />
            </article>
            {/* video */}
            <VideoPlayer video={videos[0]}/>
          </section>
          <hr />
          <EngagementSection engagement={engagement} />
          {/* quote section */}
          <section className={`${s.indexQuotes}`}>
            {/* quote */}
            <article className={`${s.quoteContainer} ${u.grid}`}>
              <img
                src={urlFor(quotes[quoteNumber].image)
                  .auto("format")
                  .width(600)
                  .height(600)
                  .quality(100)
                  .url()}
                alt={localize(quotes[quoteNumber].organisation, locale)}
                className={`${s.quoteImage}`}
              />
              <blockquote className={`${s.quote}`}>
                {"“"}<Localize data={quotes[quoteNumber].quote} />{"”"}<br />
                <cite className={`${s.cite}`}>
                  {quotes[quoteNumber].cite}<br />
                  <Localize data={quotes[quoteNumber].organisation} />
                </cite>
              </blockquote>
            </article>
            {/* quote buttons */}
            <nav className={`${u.flex} ${s.quoteBtns}`}>
              {quotes.map((quote, idx) =>
                <Fragment key={quote._key}>
                  <button
                    onClick={() => setQuoteNumber(idx)}
                    className={`
                      ${s.quoteBtn}
                      ${idx === quoteNumber ? s.quoteBtnActive : null}
                    `}
                  >
                    {" "}&bull;{" "}
                    <span className={`${u.screenReaderText}`}>
                      <Localize data={labels[27].text} />
                    </span>
                  </button>
                </Fragment>
              )}
            </nav>
          </section>
          <hr />
          {/* featured section */}
          <section>
            <h2 className={`${s.featuredTitle} ${u.uppercase}`}>
              <Localize data={labels[26].text} />{/* featured events */}
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
