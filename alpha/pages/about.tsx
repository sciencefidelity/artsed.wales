import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import sanityClient from "lib/sanityClient"
import { aboutQuery } from "lib/queries"
import { components } from "components/portableTextComponents"
import Layout from "components/layout"
import Model from "components/model"
import { LocaleString } from "generated/schema"
import { AboutData } from "lib/interfaces"
import s from "pages/about.module.scss"
import u from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(aboutQuery)
  return {
    props: { data }
  }
}

const About = ({ data }: { data: AboutData }) => {
  const { locale } = useRouter()
  const { site, statements } = data
  const title: LocaleString = {
    _type: "localeString",
    en: "About",
    cy: "Ynglŷn â"
  }
  return (
    <Layout
      site={site}
      statements={statements}
      title={title}
    >
      <div className={`${u.flex} ${u.lgColumn}`}>
        <article style={{ zIndex: 3 }}>
          <div className={`${s.heading} ${u.serif} ${u.fgDark}`}>
            {statements[2].statement && <PortableText
              value={locale === "cy" && statements[2].statement.cy
                ? statements[2].statement.cy
                : statements[2].statement.en}
              components={components}
            />}
          </div>
          <div className={`${s.paragraph} ${u.lgHide}`}>
            {statements[6].statement && <PortableText
              value={locale === "cy" && statements[6].statement.cy
                ? statements[6].statement.cy
                : statements[6].statement.en}
              components={components}
            />}
            {statements[7].statement && <PortableText
              value={locale === "cy" && statements[7].statement.cy
                ? statements[7].statement.cy
                : statements[7].statement.en}
              components={components}
            />}
          </div>
        </article>
        <Model />
        <div className={`${s.paragraph} ${u.hide} ${u.lgBlock}`}>
          {statements[6].statement && <PortableText
            value={locale === "cy" && statements[6].statement.cy
              ? statements[6].statement.cy
              : statements[6].statement.en}
            components={components}
          />}
          {statements[7].statement && <PortableText
            value={locale === "cy" && statements[7].statement.cy
              ? statements[7].statement.cy
              : statements[7].statement.en}
            components={components}
          />}
        </div>
      </div>
    </Layout>
  )
}
export default About
