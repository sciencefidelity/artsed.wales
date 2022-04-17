import groq from "groq"

export const resourceQuery = groq`{
  "resource": *[_type == "resource"][0]{
    body[], image, "slug": slug.current, title
  },
  "intro": *[_type == "resource"][0]{
    body[316..367]
  }
}`
