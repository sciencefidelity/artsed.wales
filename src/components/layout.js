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

        </div>
      </main>
        
      <footer>
      
      </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
