import groq from "groq"

export const resourceQuery = groq`{
  "resource": *[_type == "resource"][0]{
    body[], title
  }
}`
