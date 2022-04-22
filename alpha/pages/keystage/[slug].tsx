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
import Link from "components/link"
import ErrorTemplate from "components/errorTemplate"
import { keystageQuery, keystagePathQuery } from "lib/queries"
import { Event, Keystage, Navigation, Settings } from "lib/interfaces"

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
  const { keystage, events, navigation, settings } = data as {
    keystage: Keystage
    events: Event[]
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
            {locale === "cy" && keystage.__i18n_refs.title
              ? keystage.__i18n_refs.title
              : keystage.title}
          </h1>
          <p>
            {locale === "cy" && keystage.__i18n_refs.description
              ? keystage.__i18n_refs.description
              : keystage.description}
          </p>
        </section>
        <aside>
          <h2>Upcoming Events</h2>
          <ul style={{
            listStyleType: "none",
            padding: 0
          }}>
            {events.map(e =>
              <li key={e._id} style={{ marginBottom: "1.5rem" }}>
                <Date date={e.dateStart} /><br />
                <Link href={`/${e._type}/${e.slug}`}>
                  {locale === "cy" && e.__i18n_refs
                    ? e.__i18n_refs.title
                    : e.title}
                </Link><br />
                {locale === "cy" && e.__i18n_refs
                  ? e.__i18n_refs.summary
                  : e.summary}
              </li>
            )}
          </ul>
        </aside>
      </div>
    </Layout>
  )
}
export default KeystagePage
