import * as React from "react"
import PropTypes from "prop-types"

const brandEn = "National Arts and Education Network Wales"
const brandCy = "Rhwyd’ith Cenedlaethol Celfyddyd ac Addysg"
const languageSwitch = {
  en: "en",
  cy: "cy",
}

const Header = () => (
  <header
    style={{
      background: `#0D0D0D`,
      marginBottom: `5.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: `flex`,
      }}
    >
      <div
        style={{
          alignItems: `center`,
          padding: 13,
          marginRight: 10,
          marginLeft: 10,
          justifyContent: `center`,
        }}
      >
        <img
          alt="Ampersand Logo"
          src="data:image/svg+xml,%3Csvg width='94' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2'%3E%3Cpath d='M77.164 91.974C69.34 97.051 60.012 100 50 100 22.404 100 0 77.596 0 50S22.404 0 50 0s50 22.404 50 50c0 12.636-4.698 24.184-12.439 32.988L75.679 71.035l10.92-15.074-10.327-7.597-9.97 13.65-19.704-20.06c-3.798-3.798-5.697-7.834-5.697-12.107 0-5.935 3.205-8.665 6.172-9.614 2.255-.712 2.849-.594 3.798-.594 6.647 0 10.564 4.986 10.564 11.158v5.935h13.888v-5.935l-.119-1.424c-.356-3.561-2.255-12.108-9.14-18.042-4.391-4.392-15.905-6.41-23.976-3.561-7.716 2.136-11.395 8.19-13.176 12.819-1.068 2.967-1.78 6.884-1.78 7.953-.119.593-.119.949-.119 1.305 0 2.73.475 5.342 1.425 8.072.949 2.73 1.78 4.51 2.373 5.341.594.95 1.069 1.662 1.425 2.137-8.546 7.24-12.819 15.074-12.819 23.502 0 6.765 2.255 12.225 6.647 16.617 4.391 4.392 10.801 6.528 19.466 6.528 10.326 0 17.923-4.866 22.077-9.495l9.557 9.425zM45.886 78.869c-7.478 0-12.582-3.917-12.582-10.089 0-3.798 2.493-9.021 7.834-12.463L58.23 73.29c-2.967 3.68-7.121 5.579-12.344 5.579z' fill='%23e7dbd8'/%3E%3C/svg%3E"
          style={{
            margin: 0, 
          }}
        />
      </div>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          <div 
            style={{
              letterSpacing: 0.3,
              paddingBottom: "0.4rem"
            }}
          >
            {brandEn}
          </div>
          <div
            style={{
              letterSpacing: -0.1,
            }}
          >
            {brandCy}
          </div>
        </h1>
      </div>
      <div 
        style={{
          display: `flex`,
          color: `#e7dbd8`,
          fontFamily: `"Neue Haas Unica",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          textTransform: `uppercase`,
          alignItems: `center`,
          fontSize: `3.5rem`,
          letterSpacing: `0.07rem`,
          marginLeft: `auto`,
          marginRight: 40,
        }}
      >
        {languageSwitch.cy}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
