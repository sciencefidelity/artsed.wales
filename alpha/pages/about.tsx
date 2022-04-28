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
import {
  Company,
  Event,
  Label,
  Navigation,
  Page,
  Settings,
  Staff
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/about.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(aboutQuery)
  return {
    props: { data }
  }
}

const About = ({ data }) => {
  const { locale } = useRouter()
  const {
    company,
    coordinators,
    events,
    labels,
    navigation,
    pages,
    settings,
    trustees
  } = data as {
    company: Company
    coordinators: Staff[]
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
    trustees: Staff[]
  }

  const pageHead = {
    title: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.meta.title
      : pages[0].meta?.title,
    description: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.meta.description
      : pages[0].meta?.description,
    ogTitle: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.facebook.title
      : pages[0].facebook?.title,
    ogDescription: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.facebook.description
      : pages[0].facebook?.description,
    ogURL: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.meta.canonicalURL
      : pages[0].meta?.canonicalURL,
    ogImage: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.facebook.image
      : pages[0].facebook?.image,
    twitterTitle: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.twitter.title
      : pages[0].twitter?.title,
    twitterDescription: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.twitter.description
      : pages[0].twitter?.description,
    twitterImage: locale === "cy" && pages[0].__i18n_refs
      ? pages[0].__i18n_refs.twitter.image
      : pages[0].twitter?.image
  }

  const coordinatorsSorted = coordinators.sort((a, b) =>
    a.title.split(" ").pop().localeCompare(b.title.split(" ").pop()))
  const trusteesSorted = trustees.sort((a, b) =>
    a.title.split(" ").pop().localeCompare(b.title.split(" ").pop()))
  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${u.container}`}>
        <div className={`${s.about} ${u.grid}`}>
          <div className={`${s.aboutContent}`}>
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
        <hr />
      </div>
    </Layout>
  )
}
export default About
