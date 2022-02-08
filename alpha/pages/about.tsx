import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { aboutQuery } from "lib/queries"
import Layout from "components/layout"
import Markdown from "components/markdown"
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
  const { site, statements } = data
  const title: LocaleString = {
    _type: "localeString",
    en: "About",
    cy: "Amdan"
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
            <Markdown content={statements[2].statement} />
          </div>
          <div className={s.paragraph}>
            <Markdown content={statements[6].statement} />
            <Markdown content={statements[7].statement} />
          </div>
        </article>
        <Model />
      </div>
    </Layout>
  )
}
export default About
