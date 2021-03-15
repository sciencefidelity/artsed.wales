import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  cy: "CY",
}

const Language = () => {
  return (
    <div 
      style={{
        display: `flex`,
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
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: `#e7dbd8`,
                display: currentLocale === language ? `none` : `flex`,
                cursor: `pointer`,
                userSelect: `none`
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
