import { Fragment } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { Layout } from "components/layout"
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

interface Data {
  company: Company
  artform: Artform
  events: Event[]
  labels: Label[]
  navigation: Navigation
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: Path[] = await sanityClient.fetch(artformPathQuery)
  const pathsWithLocales = paths.flatMap((path: Path) =>
    locales.map((locale) => ({ ...path, locale }))
  )
  return {
    paths: pathsWithLocales,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data: Data = await sanityClient.fetch(artformQuery, { slug })
  return {
    props: {
      data,
    },
  }
}

/**
 * ArtformPage (dynamic): pages generated for each Artform
 * @remarks Generates all pages in the subdirectory `/artforms`
 * @param data - data from Sanity fetched with {@link artformQuery}
 */
const ArtformPage = ({ data }: { data: Data }) => {
  const router = useRouter()
  const { locale } = router
  const { artform, company, events, labels, navigation, settings } = data

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
