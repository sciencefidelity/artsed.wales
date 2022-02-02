import groq from "groq"

export const indexQuery = groq`{
  "site": *[_type == "site"][0]{
    siteName
  }
}`
