import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { localize, urlFor } from "lib/utils"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import { indexQuery } from "lib/queries"
import { Page, Settings } from "lib/interfaces"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}

const Home = ({ data }) => {
  const { locale } = useRouter()
  const { pages, settings } = data as {
    pages: Page[]
    settings: Settings
  }
  return (
    <Layout settings={settings}>
      <h1>{pages[1].title}</h1>
      <PortableText value={pages[1].body} components={components} />
    </Layout>
  )
}
export default Home
