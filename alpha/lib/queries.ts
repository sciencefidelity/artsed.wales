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

const events = groq`{
  "events": *[_type == "event" && ${omitDrafts}] | order(dateStart){
    __i18_lang, _id, _type, ${body}, dateEnd, dateStart,
    facilitators[]->{
      __i18n_lang, _id, _type, avatar, role, ${slug}, title
    },
    keystage[]->{ __i18n_lang, _id, _type, description, ${slug}, title },
    location, price, ${slug}, summary, title
  }
}`

const pages = groq`{
  "pages": *[_type == "page" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
}`

const posts = groq`{
  "posts": *[_type == "post" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
}`

const settings = `{
  "settings": *[_type == "settings" && ${omitDrafts}][1]{
    url, siteName, siteDescription, social{ name, url }, ${localeSeo}
  }
}`

const company = `{
  "company": *[_type == "company" && ${omitDrafts}][0]{
    address{
      cy{ city, line1, line2, postcode },
      en{ city, line1, line2, postcode }
    },
    email, telephone, title
  }
}`

export const indexQuery = groq`
  ${company}, ${pages}, ${settings}
`
