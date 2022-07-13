import { Fragment } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { Layout } from "components/layout"
import { EventList } from "components/eventList"
import { Localize } from "components/localize"
import Sidebar from "components/sidebar"
import { keystageQuery, keystagePathQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Keystage,
  Navigation,
  Path,
  Settings,
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/keystage.module.scss"

interface Data {
  company: Company
  events: Event[]
  labels: Label[]
  keystage: Keystage
  navigation: Navigation
  settings: Settings
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: Path[] = await sanityClient.fetch(keystagePathQuery)
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
  const data: Data = await sanityClient.fetch(keystageQuery, { slug })
  return {
    props: {
      data,
    },
  }
}

/**
 * KeystagePage (dynamic): pages generated for each Keystage
 * @remarks Generates all pages in the subdirectory `/keystages`
 * @param data - data from Sanity fetched with {@link keystageQuery}
 */
const KeystagePage = ({ data }: { data: Data }) => {
  const { locale } = useRouter()
  const { company, events, labels, keystage, navigation, settings } = data

  const pageHead = {
    title:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.meta?.title
        : keystage.meta?.title,
    description:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.meta?.description
        : keystage.meta?.description,
    ogTitle:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.facebook?.title
        : keystage.facebook?.title,
    ogDescription:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.facebook?.description
        : keystage.facebook?.description,
    ogURL:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.meta?.canonicalURL
        : keystage.meta?.canonicalURL,
    ogImage:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.facebook?.image
        : keystage.facebook?.image,
    twitterTitle:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.twitter?.title
        : keystage.twitter?.title,
    twitterDescription:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.twitter?.description
        : keystage.twitter?.description,
    twitterImage:
      locale === "cy" && keystage.__i18n_refs
        ? keystage.__i18n_refs.twitter?.image
        : keystage.twitter?.image,
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
          <section className={`${s.content}`}>
            {keystage.title && (
              <h1 className={`${s.h1} ${u.mono} ${u.bold}`}>
                {locale === "cy" && keystage.__i18n_refs
                  ? keystage.__i18n_refs.title
                  : keystage.title}
              </h1>
            )}
            {keystage.description && (
              <article className={`${s.body}`}>
                <p>
                  {locale === "cy" && keystage.__i18n_refs
                    ? keystage.__i18n_refs.description
                    : keystage.description}
                </p>
              </article>
            )}
            {keystage.events.length > 0 && labels[12] && (
              <>
                <h2 className={`${s.h2} ${u.uppercase}`}>
                  <Localize data={labels[12].text} />{" "}
                  {locale === "cy" && keystage.__i18n_refs
                    ? keystage.__i18n_refs.title
                    : keystage.title}
                </h2>
                <div>
                  {keystage.events.map((event) => (
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
export default KeystagePage
