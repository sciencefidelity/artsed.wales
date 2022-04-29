
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
import { acronym } from "lib/utils"
import Layout from "components/layout"
import ErrorTemplate from "components/errorTemplate"
import { EventList } from "components/eventList"
import Image from "components/image"
import Localize from "components/localize"
import Sidebar from "components/sidebar"
import { staffQuery, staffPathQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Settings,
  Staff
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/staff.module.scss"

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
    events,
    labels,
    navigation,
    settings,
    staff
  } = data as {
    company: Company
    events: Event[]
    labels: Label[]
    navigation: Navigation
    settings: Settings
    staff: Staff
  }

  const pageHead = {
    title: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.meta?.title
      : staff.meta?.title,
    description: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.meta?.description
      : staff.meta?.description,
    ogTitle: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.facebook?.title
      : staff.facebook?.title,
    ogDescription: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.facebook?.description
      : staff.facebook?.description,
    ogURL: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.meta?.canonicalURL
      : staff.meta?.canonicalURL,
    ogImage: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.facebook?.image
      : staff.facebook?.image,
    twitterTitle: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.twitter?.title
      : staff.twitter?.title,
    twitterDescription: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.twitter?.description
      : staff.twitter?.description,
    twitterImage: locale === "cy" && staff.__i18n_refs
      ? staff.__i18n_refs.twitter?.image
      : staff.twitter?.image
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
        <div className={`${s.staff} ${u.grid}`}>
          <section className={`${s.content}`}>
            <header className={`${u.flex} ${s.header}`}>
              <div className={`${s.avatar} ${u.grid}`}>
                {staff.avatar &&
                  <Image
                    image={staff.avatar}
                    alt={staff.title}
                    height={200}
                    width={200}
                    lazy={true}
                  />
                }
                {!staff.avatar &&
                  <div className={`${s.initials} ${u.mono} ${u.bold}`}>
                    {acronym(staff.title)}
                  </div>
                }
              </div>
              <div>
                {staff.role &&
                  <ul className={`${s.roles} ${u.uppercase}`}>
                    {staff.role && staff.role.map(role =>
                      <li key={role} className={`${u.horizontalList}`}>
                        {role}
                      </li>
                    )}
                  </ul>
                }
                {staff.title &&
                  <h1 className={`${s.h1} ${u.mono} ${u.bold}`}>
                    {locale === "cy" && staff.__i18n_refs
                      ? staff.__i18n_refs.title : staff.title}
                  </h1>
                }
              </div>
            </header>
            {staff.bio &&
              <article className={`${s.body}`}>
                <p>
                  {locale === "cy" && staff.__i18n_refs
                    ? staff.__i18n_refs.bio : staff.bio}
                </p>
              </article>
            }
            {staff.events.length > 0 && labels[11] && <>
              <h2 className={`${s.h2} ${u.uppercase}`}>
                <Localize data={labels[11].text} />
              </h2>
              <div>
                {staff.events.map(event => <EventList event={event} />)}
              </div>
            </>}
          </section>
          <Sidebar events={events} title={labels[10].text} />
        </div>
        <hr />
      </div>
    </Layout>
  )
}
export default StaffPage
