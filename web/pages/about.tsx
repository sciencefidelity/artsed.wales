import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { aboutQuery } from "lib/queries"
import Layout from "components/layout"
import Markdown from "components/markdown"
import Model from "components/model"
import { AboutData } from "lib/interfaces"
import s from "pages/about.module.scss"
import u from "styles/utils.module.scss"

const About = ({ data }: { data: AboutData }) => {
  const { site, statements } = data
  const title = {
    en: "About",
    cy: "Amdan"
  }
  return (
    <Layout
      site={site}
      statements={statements}
      title={title}
    >
      <div className={u.flex} style={{ marginBottom: "-8rem" }}>
        <article style={{ zIndex: 3 }}>
          <div
            className={`${s.intro} ${u.serif} ${u.fgDark}`}
            style={{ marginTop: "2rem" }}
          >
            <Markdown content={statements[2].statement} />
          </div>
          <div style={{ marginRight: "-4rem", marginTop: "4rem" }}>
            <Markdown content={statements[6].statement} />
          </div>
          <div style={{ marginRight: "-4rem" }}>
            <Markdown content={statements[7].statement} />
          </div>
        </article>
        <section>
          <Model />
        </section>
      </div>
    </Layout>
  )
}
export default About

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(aboutQuery)
  return {
    props: { data }
  }
}
