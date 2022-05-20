import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"

const slug = "'slug': slug.current"

const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`

const socialFields = "description, image, title"

const labels = `"labels": *[_type == "labelGroup" && ${omitDrafts}][0].labels`

const metaFields = "canonicalURL, description, title"

const seo = `
  facebook{ ${socialFields} },
  meta{ ${metaFields} },
  twitter{ ${socialFields} }
`

const artformFields = `
  __i18n_lang, _id, _type, description, ${slug}, ${seo}, title
`

const keystageFields = `
  __i18n_lang, _id, _type, description, ${slug}, ${seo}, title
`

const staffFields = `
  __i18n_lang, _id, _type, avatar, bio, email, job, role, title, ${seo}, ${slug}
`

const videoFields = `
  _id, _type, ${body}, mainImage, publishedAt, ${seo}, ${slug}, title,
  videoLink, "asset": video.asset->
`

const localeSeo = `
  facebookCard{ cy{ ${socialFields} }, en{ ${socialFields} } },
  meta{ cy{ ${metaFields} }, en{ ${metaFields} } },
  twitterCard{ cy{ ${socialFields} }, en{ ${socialFields} } }
`

const pageSettings = `
  settings{
    excerpt, publishedAt,
    authors[]->{ _id, _type, avatar, ${slug}, title },
    tags[]->{ _id, _type, ${slug}, title }
  }
`

const pagePostFields = `
  __i18n_lang, _id, _type, excerpt, feature, image, title,
  ${body}, ${pageSettings}, ${seo}, ${slug}
`

const eventFields = `
  __i18n_lang, _id, _type, ${body}, britelink, classOne, classTwo, classThree,
  dateEnd, dateStart, feature, icon, imageOne, imageTwo, imageThree, location,
  longTitle, pattern, price, ${seo}, shapeOne, shapeTwo, shapeThree, ${slug},
  summary, title,
  artform[]->{ ${artformFields}, __i18n_refs[0]->{ ${artformFields} } },
  facilitators[]->{ ${staffFields}, __i18n_refs[0]->{ ${staffFields} } },
  keystage[]->{ ${keystageFields}, __i18n_refs[0]->{ ${keystageFields} } }
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
  "pages": *[_type == "page"
    && __i18n_lang == "en"
    && ${omitDrafts}
  ] | order(settings.publishedAt){
    ${pagePostFields}, __i18n_refs[0]->{ ${pagePostFields} }
  }
`

const posts = `
  "posts": *[_type == "post" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}, __i18n_refs[0]->{ ${pagePostFields} }
  }
`

const quotes = `
  "quotes": *[_type == "quote"].quote[]{
    _key, cite, image, organisation, quote
  }
`

const settings = `
  "settings": *[_type == "settings" && ${omitDrafts}][1]{
    url, siteName, siteDescription, social[]{ _key, name, url }, ${localeSeo}
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

const artform = `
  "artform": *[
    _type == "artform"
    && __i18n_lang == "en"
    && slug.current == $slug
    && ${omitDrafts}
  ][0]{ ${artformFields}, __i18n_refs[0]->{ ${artformFields} },
    "events": *[
      _type == "event" &&
      __i18n_lang == "en" &&
      dateTime(now()) < dateTime(dateStart) && references(^._id)
    ]{ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } }
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

const engagement = `
  "engagement": *[_type == "engagement"][0]{
    title, intro, "engagementFigure": engagement[]{ _key, count, title }
  }
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

const coordinators = `
  "coordinators": *[
    _type == "staff"
    && role match "Co-ordinator"
    && __i18n_lang == "en"
    && ${omitDrafts}
  ]{
    ${staffFields}, __i18n_refs[0]->{ ${staffFields} }
  }
`

const trustees = `
  "trustees": *[
    _type == "staff"
    && (role match ["Chair"] || role match ["Trustee"])
    && __i18n_lang == "en"
    && ${omitDrafts}
  ]{
    ${staffFields}, __i18n_refs[0]->{ ${staffFields} }
  }
`

const keystage = `
  "keystage": *[
    _type == "keystage"
    && __i18n_lang == "en"
    && slug.current == $slug
    && ${omitDrafts}
  ][0]{ ${keystageFields}, __i18n_refs[0]->{ ${keystageFields} },
    "events": *[
      _type == "event" &&
      __i18n_lang == "en" &&
      dateTime(now()) < dateTime(dateStart) && references(^._id)
    ]{ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } }
  }
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

const staff = `
  "staff": *[
    _type == "staff"
    && __i18n_lang == "en"
    && slug.current == $slug
    && ${omitDrafts}
  ][0]{ ${staffFields}, __i18n_refs[0]->{ ${staffFields} },
    "events": *[
      _type == "event" &&
      __i18n_lang == "en" &&
      dateTime(now()) < dateTime(dateStart) && references(^._id)
    ]{ ${eventFields}, __i18n_refs[0]->{ ${eventFields} } }
  }
`

const post = `
  "post": *[
    _type == "post"
    && __i18n_lang == "en"
    && slug.current == $slug
    && ${omitDrafts}
  ][0]{ ${pagePostFields}, __i18n_refs[0]->{ ${pagePostFields} } }
`

const videos = `
  "videos": *[
    _type == "video"
    && __i18n_lang == "en"
    && ${omitDrafts}
  ] | order(publishedAt){ ${videoFields}, __i18n_refs[0]->{ ${videoFields} },
  }
`

const video = `
  "video": *[
    _type == "video"
    && __i18n_lang == "en"
    && slug.current == $slug
    && ${omitDrafts}
  ][0]{ ${videoFields}, __i18n_refs[0]->{ ${videoFields} },
  }
`

export const indexQuery = groq`{
  ${company}, ${engagement}, ${events}, ${labels}, ${navigation}, ${pages},
  ${quotes}, ${settings}, ${videos}
}`

export const aboutQuery = groq`{
  ${company}, ${coordinators}, ${events}, ${labels}, ${navigation},
  ${pages}, ${settings}, ${trustees}
}`

export const eventsQuery = groq`{
  ${artforms}, ${company}, ${events}, ${facilitators}, ${keystages},
  ${labels}, ${navigation}, ${pages}, ${settings}
}`

export const eventQuery = groq`{
  ${company}, ${event}, ${events}, ${labels}, ${navigation}, ${settings}
}`

export const eventPathQuery = groq`
  *[_type == "event" && defined(slug) && __i18n_lang == "en" && ${omitDrafts}]{
    "params": { "slug": slug.current }
  }
`

export const artformQuery = groq`{
  ${artform}, ${company}, ${events}, ${labels}, ${navigation}, ${settings}
}`

export const artformPathQuery = groq`
  *[_type == "artform" && defined(slug) && __i18n_lang == "en" && ${omitDrafts}]{
    "params": { "slug": slug.current }
  }
`

export const fourohfourQuery = groq`{
  ${company}, ${labels}, ${navigation}, ${settings}
}`

export const keystageQuery = groq`{
  ${company}, ${events}, ${keystage}, ${labels}, ${navigation}, ${settings}
}`

export const keystagePathQuery = groq`
  *[_type == "keystage" && defined(slug) && __i18n_lang == "en" && ${omitDrafts}]{
    "params": { "slug": slug.current }
  }
`

export const postQuery = groq`{
  ${company}, ${events}, ${labels}, ${navigation}, ${post}, ${settings}
}`

export const postPathQuery = groq`
  *[_type == "post" && defined(slug) && __i18n_lang == "en" && ${omitDrafts}]{
    "params": { "slug": slug.current }
  }
`

export const staffQuery = groq`{
  ${company}, ${events}, ${labels}, ${navigation}, ${settings}, ${staff}
}`

export const staffPathQuery = groq`
  *[_type == "staff" && defined(slug) && __i18n_lang == "en" && ${omitDrafts}]{
    "params": { "slug": slug.current }
  }
`

export const videoQuery = groq`{
  ${company}, ${events}, ${labels}, ${navigation}, ${settings}, ${video}
}`

export const videoPathQuery = groq`
  *[_type == "video" && defined(slug) && __i18n_lang == "en" && ${omitDrafts}]{
    "params": { "slug": slug.current }
  }
`

