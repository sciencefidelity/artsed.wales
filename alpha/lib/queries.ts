import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"

const slug = `"slug": slug.current`

const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`

const socialFields = `description, image, title`

const labels = `"labels": *[_type == "labelGroup" && ${omitDrafts}][0].labels`

const metaFields = `canonicalURL, description, title`

const seo = `
  facebookCard{ ${socialFields} },
  meta{ ${metaFields} },
  twitterCard{ ${socialFields} }
`

const artformFields = `__i18n_lang, _id, _type, description, ${slug}, title`

const keystageFields = `__i18n_lang, _id, _type, description, ${slug}, title`

const staffFields = `
  __i18n_lang, _id, _type, avatar, bio, job, role, title, ${seo}, ${slug}
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
  facilitators[]->{ ${staffFields}, __i18n_refs[0]->{ ${staffFields} } },
  keystage[]->{ ${keystageFields}, __i18n_refs[0]->{ ${keystageFields} } },
  location, price, ${slug}, summary, title
`

const events = `
  "events": *[
    _type == "event" && __i18n_lang == "en" && ${omitDrafts}
  ] | order(dateStart){ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } }
`

const event = `
  "event": *[
    _type == "event"
    && __i18n_lang == "en"
    && slug.current == $slug
    && ${omitDrafts}
  ][0]{ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } }
`

const pages = `
  "pages": *[_type == "page" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}, __i18n_refs[0]->{ ${pagePostFields} }
  }
`

const posts = `
  "posts": *[_type == "post" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}, __i18n_refs[0]->{ ${pagePostFields} }
  }
`

const settings = `
  "settings": *[_type == "settings" && ${omitDrafts}][1]{
    url, siteName, siteDescription, social{ name, url }, ${localeSeo}
  }
`

const staff = `
  "staff": *[_type == "staff" && __i18n_lang == "en" && ${omitDrafts}]{
    ${staffFields}, __i18n_refs[0]->{ ${staffFields} }
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

const artforms = `
  "artforms": *[_type == "artform" && __i18n_lang == "en" && ${omitDrafts}]{
    "events": *[
      _type == "event"
      && __i18n_lang == "en"
      && dateTime(now()) < dateTime(dateStart) && references(^._id)
      && ${omitDrafts}
    ]{ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } },
    ${artformFields}, __i18n_refs[0]->{ ${artformFields} }
  }[count(events) > 0]
`

const facilitators = `
  "facilitators": *[_type == "staff" && __i18n_lang == "en" && ${omitDrafts}]{
    "events": *[
      _type == "event"
      && __i18n_lang == "en"
      && dateTime(now()) < dateTime(dateStart) && references(^._id)
      && ${omitDrafts}
    ]{ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } },
    ${staffFields}, __i18n_refs[0]->{ ${staffFields} }
  }[count(events) > 0]
`

const keystages = `
  "keystages": *[
    _type == "keystage" && __i18n_lang == "en" && ${omitDrafts}
  ] | order(title){
    "events": *[
      _type == "event" &&
      __i18n_lang == "en" &&
      dateTime(now()) < dateTime(dateStart) && references(^._id)
    ]{ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } },
    ${keystageFields}, __i18n_refs[0]->{ ${keystageFields} }
  }[count(events) > 0]
`

const navigation = `
  "navigation": *[_type == "navigation"][0]{
    primary[]{ ..., url->{ _type, "slug": slug.current, title} },
    secondary[]{ ..., url->{ _type, "slug": slug.current, title} }
  }
`

export const indexQuery = groq`{
  ${navigation}, ${pages}, ${settings}
}`

export const eventsQuery = groq`{
  ${artforms}, ${events}, ${facilitators},
  ${keystages}, ${navigation}, ${settings}
}`

export const eventQuery = groq`{
  ${event}, ${events}, ${labels}, ${navigation}, ${settings}
}`

export const eventPathQuery = groq`
  *[
    _type == "event"
    && defined(slug)
    && __i18n_lang == "en"
    && ${omitDrafts}
  ][].slug.current
`

