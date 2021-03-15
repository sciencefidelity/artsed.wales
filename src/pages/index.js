import * as React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Introduction from "../components/introduction"
import Tredegar from "../components/tredegar"
import Casestudies from "../components/casestudies"
import Legacy from "../components/legacy"
import Blackwood from "../components/blackwood"
import Artists from "../components/artists"
import Model from "../components/model"
import Network from "../components/network"
import OurPromise from "../components/ourpromise"
import SignUp from "../components/signUp"
import Courses from "../components/courses"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <section
        style={{
          marginBottom: `6rem`,
        }}
      >
        <h2><FormattedMessage id="headline" /></h2>
      </section>
      
      <Introduction introText1={intl.formatMessage({ id: "introduction-1" })} introText2={intl.formatMessage({ id: "introduction-2" })} />
      
      <h2
        style={{
          marginBottom: `6rem`
        }}
      ><FormattedMessage id="heading-1" /></h2>
      
      <Tredegar />
      <Casestudies />
      <Legacy />
      <Blackwood />
      <Artists />
      <Model />
      <Network />
      <OurPromise />
      <SignUp />
      <Courses />
    </Layout>
  )
}

export default IndexPage
