import { GetStaticProps } from "next"
import sanityClient from "lib/sanityClient"
import { indexQuery } from "lib/queries"
import { IndexData } from "lib/interfaces"
import Layout from "components/layout"
// import Link from "components/link"
import Localize from "components/localize"
import { LocaleString } from "generated/schema"
import u from "styles/utils.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(indexQuery)
  return {
    props: { data }
  }
}

const Custom404 = ({ data }: {data: IndexData}) => {
  const { site, statements } = data
  const title: LocaleString = {
    _type: "localeString",
    cy: "404 - Tudalen ddim ar gael",
    en: "404 - Page Not Found"
  }
  const message: LocaleString = {
    _type: "localeString",
    cy: "Rydych wedi dewis llwybr nad yw ar gael.",
    en: "You’ve hit a route that doesn’t exist."
  }
  // const link: LocaleString = {
  //   _type: "localeString",
  //   cy: "Cartref",
  //   en: "Home"
  // }
  const former: LocaleString = {
    _type: "localeString",
    cy: "Chwilio am Rhwydwaith Celfyddydau ac Addysg: De Ddwyrain Cymru?",
    en: "Looking for Arts & Education Network: South East Wales?"
  }
  return (
    <Layout
      site={site}
      statements={statements}
      title={title}
    >
      <article className={u.mtLarge}>
        <h2 className={`${u.textCenter}`}>
          <Localize data={title} />
        </h2>
        <p className={`${u.textCenter} ${u.serif}`}>
          <Localize data={message} />
        </p>
        <div className={`${u.textCenter} ${u.sans} ${u.uppercase}`}>
          <a href="https://se.artsed.wales">
            <Localize data={former} />
          </a>
        </div>
      </article>
    </Layout>
  )
}
export default Custom404
