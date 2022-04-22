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
import { staffQuery, staffPathQuery } from "lib/queries"
import { Event, Navigation, Settings, Staff } from "lib/interfaces"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(staffPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(staffQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const StaffPage = ({ data }) => {
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
  const { events, navigation, settings, staff } = data as {
    staff: Staff
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
          {staff.title && <h1>
            {locale === "cy" && staff.__i18n_refs.title
              ? staff.__i18n_refs.title
              : staff.title}
          </h1>}
          {staff.bio && <p>
            {locale === "cy" && staff.__i18n_refs.bio
              ? staff.__i18n_refs.bio
              : staff.bio}
          </p>}
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
export default StaffPage
