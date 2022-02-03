import groq from "groq"

export const indexQuery = groq`{
  "site": *[_type == "site"][0]{
    siteName
  },
  "statements": *[_type == "statement"] | order(heading){
    statement
  }
}`
