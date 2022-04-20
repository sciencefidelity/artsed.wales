import groq from "groq"

export const resourceQuery = groq`{
  "resources": *[_type == "resource"]{
    body[], image, "slug": slug.current, title
  }
}`
