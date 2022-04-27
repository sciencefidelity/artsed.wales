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
  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      settings={settings}
    >
      <div className={`${s.staff} ${u.container} ${u.grid}`}>
        <section className={`${s.staffContent}`}>
          {staff.title &&
            <h1 className={`${u.mono} ${u.bold}`}>
              {locale === "cy" && staff.__i18n_refs
                ? staff.__i18n_refs.title
                : staff.title}
            </h1>
          }
          {staff.role &&
            <ul className={`${s.staffRoles} ${u.uppercase}`}>
              {staff.role && staff.role.map((r, idx) =>
                <li key={idx} className="horizontalList">{r}</li>
              )}
            </ul>
          }
          {staff.bio &&
            <p>
              {locale === "cy" && staff.__i18n_refs
                ? staff.__i18n_refs.bio
                : staff.bio}
            </p>
          }
          {staff.events.length > 0 && labels[11] &&
            <>
              <h2><Localize data={labels[11].text} /></h2>
              <div>
                {staff.events.map(event =>
                  <div key={event._id}>
                    {event.dateStart &&
                      <Date date={event.dateStart} />
                    }
                    {event.title &&
                      <h3 className={`${s.staffEventsHeading}`}>
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
        <aside className={`${s.staffSidebar}`}>
          <Sidebar events={events} title={labels[10].text} />
        </aside>
      </div>
    </Layout>
  )
}
export default StaffPage
