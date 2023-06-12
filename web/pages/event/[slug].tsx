import { Fragment } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import reactStringReplace from "react-string-replace"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { pattern, urlFor } from "lib/utils"
import { Layout } from "components/layout"
import { PostDate } from "components/date"
import { Icon } from "components/icons/icon"
import { LinkTo } from "components/linkTo"
import { Localize } from "components/localize"
import { Shape } from "components/icons/shape"
import Sidebar from "components/sidebar"
import { eventQuery, eventPathQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Params,
  Path,
  Settings,
} from "lib/interfaces"
import s from "styles/event.module.scss"
import u from "styles/utils.module.scss"

interface Data {
  company: Company
  event: Event
  events: Event[]
  navigation: Navigation
  settings: Settings
  labels: Label[]
}

export const getStaticPaths: GetStaticPaths = async ({
  locales = ["cy", "en"],
}) => {
  const paths: Path[] = await sanityClient.fetch(eventPathQuery)
  const pathsWithLocales = paths.flatMap((path: Path) =>
    locales.map((locale) => ({ ...path, locale }))
  )
  return {
    paths: pathsWithLocales,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as Params
  const data: Data = await sanityClient.fetch(eventQuery, { slug })
  return {
    props: {
      data,
    },
  }
}

/**
 * EventPage (dynamic): pages generated for each Event
 * @remarks Generates all pages in the subdirectory `/events`
 * @param data - data from Sanity fetched with {@link eventQuery}
 */
const EventPage = ({ data }: { data: Data }) => {
  const { locale } = useRouter()
  const { company, event, events, labels, navigation, settings } = data

  const pageHead = {
    title:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.meta?.title
        : event.meta?.title,
    description:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.meta?.description
        : event.meta?.description,
    ogTitle:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.facebook?.title
        : event.facebook?.title,
    ogDescription:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.facebook?.description
        : event.facebook?.description,
    ogURL:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.meta?.canonicalURL
        : event.meta?.canonicalURL,
    ogImage:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.facebook?.image
        : event.facebook?.image,
    twitterTitle:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.twitter?.title
        : event.twitter?.title,
    twitterDescription:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.twitter?.description
        : event.twitter?.description,
    twitterImage:
      locale === "cy" && event.__i18n_refs
        ? event.__i18n_refs.twitter?.image
        : event.twitter?.image,
  }

  return (
    <Layout
      company={company}
      pageHead={pageHead}
      labels={labels}
      navigation={navigation}
      settings={settings}
    >
      <div className={`${s.hero}`}>
        <div className={`${s.heroContent}`}>
          {/* <div>
            <div className={`${s.icon}`}>
              <Icon name={event.icon} />
            </div>
            <h1
              className={`${s.title} ${u.mono}`}
              // TODO: make this less dangerous
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html:
                  locale === "cy" && event.__i18n_refs
                    ? event.__i18n_refs.longTitle
                    : event.longTitle,
              }}
            />
          </div> */}
          {event.mainImage && (
            <img
              className={`${s.image}`}
              src={urlFor(event.mainImage)
                .width(1600)
                .auto("format")
                .quality(75)
                .url()}
              srcSet={`${urlFor(event.mainImage)
                .width(400)
                .auto("format")
                .quality(60)
                .url()} 400w,
                ${urlFor(event.mainImage)
                  .width(800)
                  .auto("format")
                  .quality(60)
                  .url()} 800w,
                ${urlFor(event.mainImage)
                  .width(1200)
                  .auto("format")
                  .quality(60)
                  .url()} 1200w,
                ${urlFor(event.mainImage)
                  .width(1620)
                  .auto("format")
                  .quality(60)
                  .url()} 1620w,
                ${urlFor(event.mainImage)
                  .width(1620)
                  .auto("format")
                  .quality(60)
                  .url()} 1620w,
                ${urlFor(event.mainImage)
                  .width(2000)
                  .auto("format")
                  .quality(60)
                  .url()} 2000w,
                ${urlFor(event.mainImage)
                  .width(2500)
                  .auto("format")
                  .quality(60)
                  .url()} 2500w,
                ${urlFor(event.mainImage)
                  .width(3000)
                  .auto("format")
                  .quality(60)
                  .url()} 3000w,
                ${urlFor(event.mainImage)
                  .width(3500)
                  .auto("format")
                  .quality(60)
                  .url()} 3500w,
                ${urlFor(event.mainImage)
                  .width(4000)
                  .auto("format")
                  .quality(60)
                  .url()} 4000w,
                ${urlFor(event.mainImage)
                  .width(5000)
                  .auto("format")
                  .quality(60)
                  .url()} 5000w
              `}
              alt={event.title}
            />
          )}
        </div>
      </div>
      <div className={`${u.container}`}>
        <section className={`${s.event} ${u.grid}`}>
          <div className={`${s.content}`}>
            {event.title && (
              <h1 className={`${s.h1} ${u.mono} ${u.bold}`}>
                {locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.longTitle
                  : event.longTitle}
              </h1>
            )}
            {event.body && (
              <PortableText
                value={
                  locale === "cy" && event.__i18n_refs
                    ? event.__i18n_refs.body
                    : event.body
                }
                components={components}
              />
            )}
            {event.britelink && (
              <div className={`${s.britelink} ${u.grid}`}>
                <a
                  href={
                    locale === "cy" && event.__i18n_refs
                      ? event.__i18n_refs.britelink
                      : event.britelink
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.btn} ${u.noUnderline}`}
                  role="button"
                >
                  <Localize data={labels[24].text} />
                </a>
              </div>
            )}
            {event.facilitators && (
              <h3 className={`${s.h3}`}>
                <Localize data={labels[7].text} />
              </h3>
            )}
            <p>
              {event.facilitators &&
                event.facilitators.map((facilitator) => (
                  <Fragment key={facilitator._id}>
                    {reactStringReplace(
                      locale === "cy" && facilitator.__i18n_refs.job
                        ? facilitator.__i18n_refs.job
                        : facilitator.job ?? facilitator.title,
                      facilitator.title,
                      (match) => (
                        <Fragment key={facilitator._id}>
                          <strong className={`${s.strong}`}>
                            <LinkTo
                              href={`/${facilitator._type}/${facilitator.slug}`}
                            >
                              {match}
                            </LinkTo>
                          </strong>
                        </Fragment>
                      )
                    )}
                    <br />
                  </Fragment>
                ))}
            </p>
            <p>
              <strong className={`${u.bold}`}>
                <Localize data={labels[4].text} />
                &#58;{" "}
              </strong>
              &pound;{event.price.toString()}
              <br />
              <strong className={`${u.bold}`}>
                <Localize data={labels[5].text} />
                &#58;{" "}
              </strong>
              <PostDate date={event.dateStart} />
              <br />
              <strong className={`${u.bold}`}>
                <Localize data={labels[6].text} />
                &#58;{" "}
              </strong>
              {locale === "cy" && event.__i18n_refs.location
                ? event.__i18n_refs.location
                : event.location}
            </p>
          </div>
          <hr className={`${s.hr}`} />
          <Sidebar events={events} title={labels[10].text} />
        </section>
        <hr />
      </div>
    </Layout>
  )
}
export default EventPage
