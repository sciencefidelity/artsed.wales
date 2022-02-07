import { GetStaticProps } from "next"
import Head from "next/head"
import sanityClient from "lib/sanityClient"
import { indexQuery } from "lib/queries"
import { IndexData } from "lib/interfaces"
import Layout from "components/layout"
import utilStyles from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}

const Custom404 = ({ data }: {data: IndexData}) => {
  const { site, statements } = data
  return (
    <Layout
      site={site}
      statements={statements}
    >
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1>
      </article>
    </Layout>
  )
}
export default Custom404
