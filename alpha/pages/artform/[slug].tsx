/**
 * Artform component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/artform`.
 *
 * @param data - all props fetched with `artformQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `artformPathQuery` in `lib/queries.ts`.
 */
import { Fragment } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { Layout } from "components/layout"
import { ErrorTemplate } from "components/errorTemplate"
import { EventList } from "components/eventList"
import { Localize } from "components/localize"
import Sidebar from "components/sidebar"
import { artformQuery, artformPathQuery } from "lib/queries"
import {
  Artform,
  Company,
  Event,
  Label,
  Navigation,
  Path,
  Settings,
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/artform.module.scss"

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = await sanityClient.fetch(artformPathQuery)
  const pathsWithLocales = paths.flatMap((path: Path) => {
    return locales.map((locale) => ({ ...path, locale }))
  })
  return {
    paths: pathsWithLocales,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(artformQuery, { slug })
  return {
    props: {
      data,
    },
  }
}

const ArtformPage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
  if (router.isFallback) {
    return <ErrorTemplate />
  }
  if (!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const { artform, company, events, labels, navigation, settings } = data as {
    company: Company
    artform: Artform
    events: Event[]
    labels: Label[]
    navigation: Navigation
    settings: Settings
  }

  const pageHead = {
    title:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.meta?.title
        : artform.meta?.title,
    description:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.meta?.description
        : artform.meta?.description,
    ogTitle:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.facebook?.title
        : artform.facebook?.title,
    ogDescription:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.facebook?.description
        : artform.facebook?.description,
    ogURL:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.meta?.canonicalURL
        : artform.meta?.canonicalURL,
    ogImage:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.facebook?.image
        : artform.facebook?.image,
    twitterTitle:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.twitter?.title
        : artform.twitter?.title,
    twitterDescription:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.twitter?.description
        : artform.twitter?.description,
    twitterImage:
      locale === "cy" && artform.__i18n_refs
        ? artform.__i18n_refs.twitter?.image
        : artform.twitter?.image,
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
        <div className={`${s.artform} ${u.grid}`}>
          <section className={`${s.content}`}>
            {artform.title && (
              <h1 className={`${s.h1} ${u.mono} ${u.bold}`}>
                {locale === "cy" && artform.__i18n_refs
                  ? artform.__i18n_refs.title
                  : artform.title}
              </h1>
            )}
            {artform.description && (
              <article className={`${s.body}`}>
                <p>
                  {locale === "cy" && artform.__i18n_refs
                    ? artform.__i18n_refs.description
                    : artform.description}
                </p>
              </article>
            )}
            {artform.events.length > 0 && labels[12] && (
              <>
                <h2 className={`${s.h2} ${u.uppercase}`}>
                  <Localize data={labels[12].text} />{" "}
                  {locale === "cy" && artform.__i18n_refs
                    ? artform.__i18n_refs.title
                    : artform.title}
                </h2>
                <div>
                  {artform.events.map((event) => (
                    <Fragment key={event._id}>
                      <EventList event={event} />
                    </Fragment>
                  ))}
                </div>
              </>
            )}
          </section>
          <hr className={`${s.hr}`} />
          <Sidebar events={events} title={labels[10].text} />
        </div>
        <hr />
      </div>
    </Layout>
  )
}
export default ArtformPage
