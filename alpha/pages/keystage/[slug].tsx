/**
 * Keystage component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/keystage`.
 *
 * @param data - all props fetched with `keystagePageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `keystagePagePathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Date from "components/date"
import ErrorTemplate from "components/errorTemplate"
import Link from "components/link"
import Localize from "components/localize"
import Sidebar from "components/sidebar"
import { keystageQuery, keystagePathQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Keystage,
  Navigation,
  Settings
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/keystage.module.scss"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(keystagePathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(keystageQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const KeystagePage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
  if(router.isFallback) {
    return (
      <ErrorTemplate />
    )
  }
  if(!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const {
    company,
    events,
    labels,
    keystage,
    navigation,
    settings
  } = data as {
    company: Company
    events: Event[]
    labels: Label[]
    keystage: Keystage
    navigation: Navigation
    settings: Settings
  }

  const pageHead = {
    title: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.meta.title
      : keystage.meta?.title,
    description: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.meta.description
      : keystage.meta?.description,
    ogTitle: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.facebook.title
      : keystage.facebook?.title,
    ogDescription: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.facebook.description
      : keystage.facebook?.description,
    ogURL: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.meta.canonicalURL
      : keystage.meta?.canonicalURL,
    ogImage: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.facebook.image
      : keystage.facebook?.image,
    twitterTitle: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.twitter.title
      : keystage.twitter?.title,
    twitterDescription: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.twitter.description
      : keystage.twitter?.description,
    twitterImage: locale === "cy" && keystage.__i18n_refs
      ? keystage.__i18n_refs.twitter.image
      : keystage.twitter?.image
  }

  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${u.container}`}>
        <div className={`${s.keystage} ${u.grid}`}>
          <section className={`${s.keystageContent}`}>
            {keystage.title &&
              <h1 className={`${u.mono} ${u.bold}`}>
                {locale === "cy" && keystage.__i18n_refs
                  ? keystage.__i18n_refs.title
                  : keystage.title}
              </h1>
            }
            {keystage.description &&
              <article className={`${s.keystageBody}`}>
                <p>
                  {locale === "cy" && keystage.__i18n_refs
                    ? keystage.__i18n_refs.description
                    : keystage.description}
                </p>
              </article>
            }
            {keystage.events.length > 0 && labels[12] &&
              <>
                <h2 className={`${u.uppercase}`}>
                  <Localize data={labels[12].text} />{" "}
                  {locale === "cy" && keystage.__i18n_refs
                    ? keystage.__i18n_refs.title
                    : keystage.title}
                </h2>
                <div>
                  {keystage.events.map(event =>
                    <div className={`${s.event}`} key={event._id}>
                      {event.dateStart &&
                        <Date date={event.dateStart} />
                      }
                      {event.title &&
                        <h3 className={`
                          ${s.keystageEventsHeading} ${u.mono} ${u.bold}
                        `}>
                          <Link href={`/${event._type}/${event.slug}`}>
                            {locale === "cy" && event.__i18n_refs
                              ? event.__i18n_refs.title
                              : event.title}
                          </Link>
                        </h3>
                      }
                      {event.summary &&
                        <p>
                          {locale === "cy" && event.__i18n_refs
                            ? event.__i18n_refs.summary
                            : event.summary}
                        </p>
                      }
                    </div>
                  )}
                </div>
              </>
            }
          </section>
          <Sidebar events={events} title={labels[10].text} />
        </div>
        <hr />
      </div>
    </Layout>
  )
}
export default KeystagePage
