import groq from "groq"

export const indexQuery = groq`{
  "site": *[_type == "site"][0]{
    siteName
  },
  "statements": *[_type == "statement"] | order(heading){
    statement
  }
}`

export const eventsQuery = groq`{
  "site": *[_type == "site"][0]{
    siteName
  },
  "events": *[_type == "event"] | order(date){
    _id,
    "artforms": artform[]->title,
    body,
    britelink,
    date,
    "facilitators": facilitators[]->name,
    imageCaption,
    "keystages": keystage[]->title,
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
