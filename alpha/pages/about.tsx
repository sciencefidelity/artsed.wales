import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { aboutQuery } from "lib/queries"
import Layout from "components/layout"
import Markdown from "components/markdown"
import Model from "components/model"
import SignUp from "components/signUp"
import { AboutData } from "lib/interfaces"
import s from "pages/index.module.scss"
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
      title={title}
    >
      <div className={u.flex}>
        <article>
          <div
            className={`${s.intro} ${u.serif} ${u.fgDark}`}
            style={{ marginTop: "2rem" }}
          >
            <Markdown content={statements[0].statement} />
          </div>
          <div style={{ marginRight: "-4rem", marginTop: "6rem" }}>
            <Markdown content={statements[2].statement} />
          </div>
          <div style={{ marginRight: "-4rem" }}>
            <Markdown content={statements[3].statement} />
          </div>
        </article>
        <section>
          <Model />
        </section>
      </div>
      <SignUp
        site={site}
        statements={statements}
      />
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
