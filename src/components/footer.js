import * as React from "react"
import PropTypes from "prop-types"

const brandEn = "National Arts and Education Network Wales"
const brandCy = "Rhwydwaith Cenedlaethol Celf ac Addysg"

const Footer = () => (
  <footer
    style={{
      background: `#0D0D0D`,
    }}
  >
    <div
      style={{
        width: `88%`,
        maxWidth: 1000,
        margin: `0 auto`,
        display: `flex`,
      }}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
        }}
      >
          <div 
            style={{
              fontFamily: `"Neue Haas Unica",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
              color: `#e7dbd8`,
              textAlign: `left`,
            }}
          >
            <p>{brandEn}</p>
          </div>
      </div>
      <div 
        style={{
          display: `flex`,
          color: `#e7dbd8`,
          fontFamily: `"Neue Haas Unica",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          fontSize: `1.1rem`,
          marginLeft: `auto`,
        }}
      >
        <p>Site by <span style={{textDecoration: `underline`,}}>Matt Cook</span></p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
