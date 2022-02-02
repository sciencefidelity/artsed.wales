import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { indexQuery } from "lib/queries"
import Layout from "components/layout"
import { AllPagesData } from "lib/interfaces"
// import u from "styles/utils.module.scss"

const Home = ({ data }: { data: AllPagesData }) => {
  return (
    <Layout
      site={data.site}
    >
      <section>

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
