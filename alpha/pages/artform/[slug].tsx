/**
 * artform component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/artform`.
 *
 * @param data - all props fetched with `artformPageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `artformPagePathQuery` in `lib/queries.ts`.
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
import { artformQuery, artformPathQuery } from "lib/queries"
import { Artform, Event, Label, Navigation, Settings } from "lib/interfaces"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(artformPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(artformQuery, { slug })
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
  const { artform, events, labels, navigation, settings } = data as {
    artform: Artform
    events: Event[]
    labels: Label[]
    navigation: Navigation
    settings: Settings
  }
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <section style={{marginRight: "2rem"}}>
          <h1>
            {locale === "cy" && artform.__i18n_refs.title
              ? artform.__i18n_refs.title
              : artform.title}
          </h1>
          <p>
            {locale === "cy" && artform.__i18n_refs.description
              ? artform.__i18n_refs.description
              : artform.description}
          </p>
          {labels[12] && <h2>
            <Localize data={labels[12].text} />{" "}
            {locale === "cy" && artform.__i18n_refs.title
              ? artform.__i18n_refs.title
              : artform.title}
          </h2>}
          <div>
            {artform.events.map(event =>
              <div key={event._id}>
                {event.dateStart &&
                  <Date date={event.dateStart} />
                }
                {event.title &&
                  <h2 style={{margin: 0}}>
                    <Link href={`/${event._type}/${event.slug}`}>
                      {locale === "cy" && event.__i18n_refs
                        ? event.__i18n_refs.title
                        : event.title}
                    </Link>
                  </h2>
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
        </section>
        <Sidebar events={events} title={labels[10].text} />
      </div>
    </Layout>
  )
}
export default KeystagePage
