import * as React from "react"
import PropTypes from "prop-types"
import { useIntl } from "gatsby-plugin-intl"

import Header from "./header"
import Background from "./background"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => {
  const intl = useIntl()
  return (
    <>
      
      <Header />
      
      <Background />
      
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
      
      <Footer 
        contact={intl.formatMessage({ id: "contact" })}
        email={intl.formatMessage({ id: "email" })}
        brand={intl.formatMessage({ id: "brand" })}
        site={intl.formatMessage({ id: "site" })}
      />
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
