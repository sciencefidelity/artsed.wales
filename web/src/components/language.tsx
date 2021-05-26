import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

const languageName = {
  en: "EN",
  cy: "CY"
}

const Language = () => {
  return (
    <div className="languageSwitcher">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              className="languageLink"
              style={{
                display: currentLocale === language ? `none` : `flex`
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
