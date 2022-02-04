import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { indexQuery } from "lib/queries"
import Layout from "components/layout"
import Localize from "components/localize"
import Model from "components/model"
import { IndexData } from "lib/interfaces"
// import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

const Home = ({ data }: { data: IndexData }) => {
  const { site } = data
  return (
    <Layout
      site={site}
    >
      <section>
        <Model statement={data.statements[6]}/>
      </section>
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
