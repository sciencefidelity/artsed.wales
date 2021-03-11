import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Headline from "./headline"
import Introduction from "./introduction"
import Tredegar from "./tredegar"
import Casestudies from "./casestudies"
import Legacy from "./legacy"
import Blackwood from "./blackwood"
import Artists from "./artists"
import Model from "./model"
import Network from "./network"
import Promise from "./promise"
import SignUp from "./signUp"
import Courses from "./courses"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      
      <Header />
      
      <main>
        <div
          style={{
            width: `88%`,
            maxWidth: 1000,
            margin: `auto`,
          }}
        >
          <Headline />
          <Introduction />
          <h2
            style={{
              marginBottom: `6rem`,
            }}
          >Exploring, Responding, Creating</h2>
          <Tredegar />
          <Casestudies />
          <Legacy />
          <Blackwood />
          <Artists />
          <Model />
          <Network />
          <Promise />
          <SignUp />
          <Courses />
          

        </div>
      </main>
        
        <Footer />
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
