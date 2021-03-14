import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Headline from "../components/headline"
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

const IndexPage = () => (
  <Layout>
    <Headline />
    <Introduction />
    <h2
      style={{
        marginBottom: `6rem`
      }}
    >Exploring, Responding, Creating</h2>
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

export default IndexPage
