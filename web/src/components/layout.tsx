import * as React from "react"
import PropTypes from "prop-types"
import { useIntl } from "gatsby-plugin-react-intl"

import Header from "./header"
import Footer from "./footer"

import "../scss/layout.scss"

const Layout = ({ children }) => {
  const intl = useIntl()
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 471px)"
        }}
      >
        <div className="container">{children}</div>
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
  children: PropTypes.node.isRequired
}

export default Layout
