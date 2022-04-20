import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { localize, urlFor } from "lib/utils"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import { indexQuery } from "lib/queries"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await sanityClient.fetch(indexQuery)
//   return {
//     props: { data }
//   }
// }

const Home = ({ data }) => {
  // const { locale } = useRouter()
  // const { hero, photography, quotes, site, statements, video } = data
  return (
    <Layout>
      <h1>Main content</h1>
    </Layout>
  )
}
export default Home
