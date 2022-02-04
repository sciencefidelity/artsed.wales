import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { indexQuery } from "lib/queries"
import Layout from "components/layout"
import Markdown from "components/markdown"
import Model from "components/model"
import { IndexData } from "lib/interfaces"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

const Home = ({ data }: { data: IndexData }) => {
  const { site, statements } = data
  return (
    <Layout
      site={site}
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
{/*           <Markdown content={statements[4].statement} /> */}
        </article>
        <section>
          <Model />
        </section>
      </div>
    </Layout>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}
