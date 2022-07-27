import groq from "groq";

export const resourceQuery = groq`{
  "resources": *[_type == "resource"]{
    body[], image, "slug": slug.current, title
    }
}`;

export const resourcePathQuery = groq`{
  "resources": *[_type == "resource"][]{
    "resource": slug.current, body
  }
}`;
