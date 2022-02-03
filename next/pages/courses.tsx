import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { indexQuery } from "lib/queries"
import Layout from "components/layout"
// import Localize from "components/localize"
import { IndexData } from "lib/interfaces"
// import s from "pages/courses.module.scss"
// import u from "styles/utils.module.scss"

const Courses = ({ data }: { data: IndexData }) => {
  const { site } = data
  return (
    <Layout
      site={site}
    >
      <section>
        <h2>Courses</h2>
      </section>
    </Layout>
  )
}
export default Courses

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}
