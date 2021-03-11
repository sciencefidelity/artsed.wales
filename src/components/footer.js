import * as React from "react"
import PropTypes from "prop-types"

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
        padding: `2rem 0 1rem`,
        display: `flex`,
        color: `#e7dbd8`,
        fontFamily: `"Neue Haas Unica",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: `50%`
        }}
      >
        <h2
          style={{
            color: `#e7dbd8`,
            marginBottom: `-0.1rem`
          }}
        >
          Get in touch
        </h2>
        <p
          style={{
            fontSize: `1.5rem`,
            textDecoration: `underline`,
            color: `#e7dbd8`,
            marginBottom: `2.65rem`
          }}
        >
          info@artsed.wales
        </p>
        <p
          style={{
            fontSize: `1rem`,
            color: `#e7dbd8`,
          }}
        >
          © {new Date().getFullYear()} National Arts and Education Network
        </p>
      </div>
      
      
      
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
        }}
      >
      </div>
      
      
      <div 
        style={{
          display: `flex`,
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
