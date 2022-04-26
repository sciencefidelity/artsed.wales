import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Link from "components/link"
import Localize from "components/localize"
import Sidebar from "components/sidebar"
import { aboutQuery } from "lib/queries"
import { Event, Label, Navigation, Page, Settings, Staff } from "lib/interfaces"
import u from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(aboutQuery)
  return {
    props: { data }
  }
}

const About = ({ data }) => {
  const { locale } = useRouter()
  const {
    coordinators,
    events,
    labels,
    navigation,
    pages,
    settings,
    trustees
  } = data as {
    coordinators: Staff[]
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
    trustees: Staff[]
  }
  const coordinatorsSorted = coordinators.sort((a, b) =>
    a.title.split(" ").pop().localeCompare(b.title.split(" ").pop()))
  const trusteesSorted = trustees.sort((a, b) =>
    a.title.split(" ").pop().localeCompare(b.title.split(" ").pop()))
  return (
    <Layout labels={labels} navigation={navigation} settings={settings}>
      <div
        className={`${u.container}`}
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <div style={{marginRight: "3rem"}}>
          <h1>
            {locale === "cy" && pages[0].__i18n_refs
              ? pages[0].__i18n_refs.title
              : pages[0].title}
          </h1>
          <PortableText
            value={locale === "cy" && pages[0].__i18n_refs
              ? pages[0].__i18n_refs.body
              : pages[0].body}
            components={components}
          />
          <h2><Localize data={labels[13].text} /></h2>
          <ul style={{listStyleType: "none", padding: 0}}>
            {coordinatorsSorted.map(coordinator =>
              <li key={coordinator._id}>
                <Link href={`/${coordinator._type}/${coordinator.slug}`}>
                  {locale === "cy" && coordinator.__i18n_refs
                    ? coordinator.__i18n_refs.title
                    : coordinator.title}
                </Link>
                {coordinator.email &&
                  <>
                    {" – "}
                    <a href={`mailto:${coordinator.email}`}>
                      {locale === "cy" && coordinator.__i18n_refs
                        ? coordinator.__i18n_refs.email
                        : coordinator.email}
                    </a>
                  </>
                }
              </li>
            )}
          </ul>
          <h2><Localize data={labels[15].text} /></h2>
          <h3><Localize data={labels[14].text} /></h3>
          <ul style={{listStyleType: "none", padding: 0}}>
            {trusteesSorted.map(trustee => trustee.role.includes("Chair") &&
              <li key={trustee._id}>
                <Link href={`/${trustee._type}/${trustee.slug}`}>
                  {locale === "cy" && trustee.__i18n_refs
                    ? trustee.__i18n_refs.title
                    : trustee.title}
                </Link>
                {trustee.email &&
                  <>
                    {" – "}
                    <a href={`mailto:${trustee.email}`}>
                      {locale === "cy" && trustee.__i18n_refs
                        ? trustee.__i18n_refs.email
                        : trustee.email}
                    </a>
                  </>
                }
              </li>
            )}
          </ul>
          <h3><Localize data={labels[16].text} /></h3>
          <ul style={{listStyleType: "none", padding: 0}}>
            {trusteesSorted.map(trustee => trustee.role.includes("Trustee") &&
              <li key={trustee._id}>
                <Link href={`/${trustee._type}/${trustee.slug}`}>
                  {locale === "cy" && trustee.__i18n_refs
                    ? trustee.__i18n_refs.title
                    : trustee.title}
                </Link>
                {trustee.email &&
                  <>
                    {" – "}
                    <a href={`mailto:${trustee.email}`}>
                      {locale === "cy" && trustee.__i18n_refs
                        ? trustee.__i18n_refs.email
                        : trustee.email}
                    </a>
                  </>
                }
              </li>
            )}
          </ul>
        </div>
        <Sidebar
          events={events}
          title={labels[10].text}
        />
      </div>
    </Layout>
  )
}
export default About
