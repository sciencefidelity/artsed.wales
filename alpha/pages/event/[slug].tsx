/**
 * Event component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/event`.
 *
 * @param data - all props fetched with `eventQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `eventPathQuery` in `lib/queries.ts`.
 */
import { Fragment } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import reactStringReplace from "react-string-replace"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { pattern, urlFor } from "lib/utils"
import { Layout } from "components/layout"
import { EventDate } from "components/date"
import { Icon } from "components/icons/icon"
import { LinkTo } from "components/linkTo"
import { Localize } from "components/localize"
import { ErrorTemplate } from "components/errorTemplate"
import { Shape } from "components/icons/shape"
import Sidebar from "components/sidebar"
import { eventQuery, eventPathQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Settings
} from "lib/interfaces"
import s from "styles/event.module.scss"
import u from "styles/utils.module.scss"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(eventPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(eventQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const EventPage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
  if(router.isFallback) {
    return <ErrorTemplate />
  }
  if(!data) {
    return (<>
      <Head><meta name="robots" content="noindex" /></Head>
      <ErrorTemplate />
    </>)
  }
  const {
    company,
    event,
    events,
    labels,
    navigation,
    settings
  } = data as {
    company: Company
    event: Event
    events: Event[]
    navigation: Navigation
    settings: Settings
    labels: Label[]
  }

  const pageHead = {
    title: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.meta?.title
      : event.meta?.title,
    description: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.meta?.description
      : event.meta?.description,
    ogTitle: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.facebook?.title
      : event.facebook?.title,
    ogDescription: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.facebook?.description
      : event.facebook?.description,
    ogURL: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.meta?.canonicalURL
      : event.meta?.canonicalURL,
    ogImage: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.facebook?.image
      : event.facebook?.image,
    twitterTitle: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.twitter?.title
      : event.twitter?.title,
    twitterDescription: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.twitter?.description
      : event.twitter?.description,
    twitterImage: locale === "cy" && event.__i18n_refs
      ? event.__i18n_refs.twitter?.image
      : event.twitter?.image
  }

  return (
    <Layout
      company={company}
      pageHead={pageHead}
      labels={labels}
      navigation={navigation}
      settings={settings}
    >
      <div className={`${s.hero} ${pattern(event.pattern)}`}>
        <div className={`${s.heroContent}`}>
          <div>
            <div className={`${s.icon}`}><Icon name={event.icon} /></div>
            <h1
              className={`${s.title} ${u.mono}`}
              dangerouslySetInnerHTML={{
                __html: locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.longTitle : event.longTitle }}
            />
          </div>
          {event.shapeOne && <div className={`${s[event.shapeOne]}`}>
            <Shape name={event.shapeOne} />
          </div>}
          {event.shapeTwo && <div className={`${s[event.shapeTwo]}`}>
            <Shape name={event.shapeTwo} />
          </div>}
          {event.shapeThree && <div className={`${s[event.shapeThree]}`}>
            <Shape name={event.shapeThree} />
          </div>}
          {event.imageOne && <img
            src={urlFor(event.imageOne)
              .auto("format")
              .quality(85)
              .url()}
            alt={event.title}
            className={`${s[event.classOne]}`}
          />}
          {event.imageTwo && <img
            src={urlFor(event.imageTwo)
              .auto("format")
              .quality(85)
              .url()}
            alt={event.title}
            className={`${s[event.classTwo]}`}
          />}
          {event.imageThree && <img
            src={urlFor(event.imageThree)
              .auto("format")
              .quality(85)
              .url()}
            alt={event.title}
            className={`${s[event.classThree]}`}
          />}
        </div>
      </div>
      <div className={`${u.container}`}>
        <section className={`${s.event} ${u.grid}`}>
          <div className={`${s.content}`}>
            {event.title && <h1 className={`${s.h1} ${u.mono} ${u.bold}`}>
              {locale === "cy" && event.__i18n_refs
                ? event.__i18n_refs.title : event.title}
            </h1>}
            {event.body && <PortableText
              value={locale === "cy" && event.__i18n_refs
                ? event.__i18n_refs.body : event.body}
              components={components}
            />}
            {event.britelink && <div className={`${s.britelink} ${u.grid}`}>
              <a
                href={locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.britelink : event.britelink}
                target="_blank" rel="noreferrer"
                className={`${s.btn} ${u.noUnderline}`}
                role="button"
              >
                <Localize data={labels[24].text} />
              </a>
            </div>}
            {event.facilitators &&
              <h3 className={`${s.h3}`}>
                <Localize data={labels[7].text} />
              </h3>
            }
            <p>
              {event.facilitators && event.facilitators.map(facilitator =>
                <Fragment key={facilitator._id}>
                  {reactStringReplace(
                    locale === "cy" && facilitator.__i18n_refs.job
                      ? facilitator.__i18n_refs.job : facilitator.job
                        ? facilitator.job : facilitator.title,
                    facilitator.title, match =>
                      <Fragment key={facilitator._id}>
                        <strong className={`${s.strong}`}>
                          <LinkTo
                            href={`/${facilitator._type}/${facilitator.slug}`}
                          >{match}</LinkTo>
                        </strong>
                      </Fragment>
                  )}
                  <br />
                </Fragment>
              )}
            </p>
            <p>
              {/* <strong className={`${u.bold}`}> */}
              <Localize data={labels[4].text} />&#58;{" "}
              {/* </strong> */}
              &pound;{event.price.toString()}<br />
              {/* <strong className={`${u.bold}`}> */}
              <Localize data={labels[5].text} />&#58;{" "}
              {/* </strong> */}
              <EventDate
                dateEnd={event.dateEnd}
                dateStart={event.dateStart}
              /><br />
              {/* <strong className={`${u.bold}`}> */}
              <Localize data={labels[6].text} />&#58;{" "}
              {/* </strong> */}
              {event.location}
            </p>
            {event.keystage &&
              <p>
                {labels[8] && <Localize data={labels[8].text} />}{" "}
                {event.keystage.map((ks, idx) =>
                  <Fragment key={ks._id}>
                    {ks.title &&
                      <LinkTo href={`/${ks._type}/${ks.slug}`}>
                        {locale === "cy" && ks.__i18n_refs
                          ? ks.__i18n_refs.title
                          : ks.title}
                      </LinkTo>
                    }
                    {idx === event.keystage.length - 1 && ""}
                    {idx === event.keystage.length - 2 &&
                      <Localize data={labels[9].text} />
                    }
                    {idx >= 0 && idx < event.keystage.length - 2 && ", "}
                  </Fragment>
                )}
              </p>
            }
          </div>
          <hr className={`${s.hr}`} />
          <Sidebar
            events={events}
            title={labels[10].text}
          />
        </section>
        <hr />
      </div>
    </Layout>
  )
}
export default EventPage
