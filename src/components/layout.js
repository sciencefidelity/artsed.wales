import * as React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: `calc(100vh - 471px)`
        }}
      >
        <div
          style={{
            width: `88%`,
            maxWidth: 1000,
            margin: `auto`,
          }}
        >
          {children}
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
