import groq from "groq";

export const resourceQuery = groq`{
  "resources": *[_type == "resource"]{
    body[], image, "slug": slug.current, title
    }
}`;

export const resourcePathQuery = groq`{
  "paths": *[_type == "resource" && defined(slug) && __i18n_lang == "en"][]{
    "resource": slug.current, body
  }
}`;
