import { GetStaticProps } from "next"
import { urlFor } from "lib/utils"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Markdown from "components/markdown"
import SignUp from "components/signUp"
import { indexQuery } from "lib/queries"
import { IndexData } from "lib/interfaces"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

const Home = ({ data }: { data: IndexData }) => {
  const { photography, site, statements } = data
  return (
    <Layout
      site={site}
    >
      <div className={`${u.grid} ${u.mbLarge}`} style={{ gridTemplateColumns: "55% 43%", gap: "3rem" }}>
        <div>
          <div
            className={`${s.intro} ${u.serif} ${u.fgDark}`}
            style={{ marginTop: "3rem" }}
          >
            <Markdown content={statements[0].statement} />
          </div>
          <div style={{ marginTop: "6rem" }}>
            <Markdown content={statements[12].statement} />
          </div>
          <div>
            <Markdown content={statements[3].statement} />
          </div>
        </div>
        <div className={s.heroContainer}>
          <img
            src={urlFor(photography[16].image)
              .auto("format")
              .width(900)
              .height(900)
              .quality(85)
              .url()}
            width={900}
            height={1100}
            alt={photography[0].title.en}
            className={s.hero}
            loading="lazy"
          />
        </div>
      </div>
      <SignUp
        statements={statements}
        site={site}
      />
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
