import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"

const slug = `"slug": slug.current`

const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`

const socialFields = `description, image, title`

const metaFields = `canonicalURL, description, title`

const seo = `
  facebookCard{ ${socialFields} },
  meta{ ${metaFields} },
  twitterCard{ ${socialFields} }
`

const localeSeo = `
  facebookCard{ cy{ ${socialFields} }, en{ ${socialFields} } },
  meta{ cy{ ${metaFields} }, en{ ${metaFields} } },
  twitterCard{ cy{ ${socialFields} }, en{ ${socialFields} } }
`

const pageSettings = `
  settings{
    excerpt, publishedAt,
    authors[]->{ _id, _type, image, name, ${slug} },
    tags[]->{ _id, _type, ${slug}, title }
  }
`

const pagePostFields = `
  __i18n_lang, _id, _type, excerpt, feature, image, title,
  ${body}, ${pageSettings}, ${seo}, ${slug}
`

// const postReferenceFields = `
//   _id, _type, body, excerpt, image, title, ${pageSettings}, ${slug}
// `

const eventFields = `
  __i18n_lang, _id, _type, ${body}, dateEnd, dateStart,
  facilitators[]->{
    __i18n_lang, _id, _type, avatar, role, ${slug}, title
  },
  keystage[]->{ __i18n_lang, _id, _type, description, ${slug}, title },
  location, price, ${slug}, summary, title
`

const events = `
  "events": *[
    _type == "event" && __i18n_lang == "en" && ${omitDrafts}
  ] | order(dateStart){ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } }
`

const pages = `
  "pages": *[_type == "page" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
`

const posts = `
  "posts": *[_type == "post" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
`

const settings = `
  "settings": *[_type == "settings" && ${omitDrafts}][1]{
    url, siteName, siteDescription, social{ name, url }, ${localeSeo}
  }
`

const company = `
  "company": *[_type == "company" && ${omitDrafts}][0]{
    address{
      cy{ city, line1, line2, postcode },
      en{ city, line1, line2, postcode }
    },
    email, telephone, title
  }
`

const keystages = `{
  "keystages": *[_type == "keystage"][0]{
    __i18n_lang, _id, _type, description, ${slug}, title
  }
}`

export const indexQuery = groq`{
  ${pages}, ${settings}
}`

export const eventsQuery = groq`{
  ${events}, ${settings}
}`
