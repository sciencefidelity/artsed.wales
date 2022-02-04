import groq from "groq"

const siteFields = `
  addressLine1,
  addressLine2,
  email,
  keywords,
  seoDescription,
  seoImage,
  seoTitle,
  signUp,
  signUpPlaceholder,
  siteDescription,
  siteName,
  twitterHandle
`

export const indexQuery = groq`{
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement
  }
}`

export const aboutQuery = groq`{
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement
  }
}`

export const eventsQuery = groq`{
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "events": *[_type == "event"] | order(date){
    _id,
    "artforms": artform[]->{_id, title},
    body,
    britelink,
    date,
    "people": facilitators[]->{_id, name},
    imageCaption,
    "keystages": keystage[]->{_id, title},
    location,
    mainImage,
    ogDescription,
    ogTitle,
    price,
    slug,
    subtitle,
    title
  }
}`
