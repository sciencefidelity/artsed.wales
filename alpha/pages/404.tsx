import { GetStaticProps } from "next"
import Head from "next/head"
import sanityClient from "lib/sanityClient"
import { indexQuery } from "lib/queries"
import { IndexData } from "lib/interfaces"
import Layout from "components/layout"
import Link from "components/link"
import u from "styles/utils.module.scss"

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
      <article className={u.mtLarge}>
        <h2 className={`${u.textCenter}`}>404 - Page Not Found</h2>
        <p className={`${u.textCenter} ${u.serif}`}>You've hit a path that does not exist.</p>
        <div className={`${u.textCenter} ${u.sans} ${u.uppercase}`}><Link href="/" className={u.textDark}>Home</Link></div>
      </article>
    </Layout>
  )
}
export default Custom404
