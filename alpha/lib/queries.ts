import groq from "groq"
const omitDrafts = "!(_id in path('drafts.**'))"

const defs = `
  ...,
  cy[] {
    ...,
    markDefs[]{
      ...,
      item->{
        _type,
        "slug": slug
      }
    }
  },
  en[] {
    ...,
    markDefs[]{
      ...,
      item->{
        _type,
        "slug": slug
      }
    }
  }
`

const siteFields = `
  addressLine1,
  addressLine2,
  email,
  "engagementFigures": engagement[]->{_id,count,heading},
  keywords,
  seoDescription,
  seoImage,
  seoTitle,
  signUp,
  signUpPlaceholder,
  siteDescription,
  siteName,
  "socialMediaLinks": socialLinks[]->{_id, link, site, username},
  twitterHandle
`

export const indexQuery = groq`{
  "hero": *[_type == "photography" && hero == true]{
    ...,
    "random": (dateTime(now()) - dateTime(_createdAt)) % 199
  } | order(random desc)[0],
  "quotes": *[_type == "quote"] | order(_createdAt){
    _id, cite, organisation, quote{${defs}}
  },
  "photography": *[_type == "photography"] | order(_createdAt){
    image, title
  },
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement{${defs}}
  },
  "video": *[_type == "video"][0]{mainImage, title, videoLink}
}`

export const aboutQuery = groq`{
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement{${defs}}
  }
}`

export const eventsQuery = groq`{
  "events": *[_type == "event"] | order(date){
    _id,
    _type,
    "artforms": artform[]->{_id, title},
    body{${defs}},
    britelink,
    date,
    date2,
    "people": facilitators[]->{_id, name},
    imageCaption,
    "keystages": keystage[]->{_id, title},
    location,
    mainImage,
    ogDescription,
    ogTitle,
    price,
    slug,
    subtitle,
    title
  },
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement{${defs}}
  }
}`

export const eventQuery = groq`{
  "event": *[
    _type == "event"
    && slug.en.current == $slug
    && ${omitDrafts}
  ][0]{
    _id,
    _type,
    "artforms": artform[]->{_id, title},
    body{${defs}},
    britelink,
    date,
    date2,
    "people": facilitators[]->{_id, name},
    imageCaption,
    "keystages": keystage[]->{_id, title},
    location,
    mainImage,
    ogDescription,
    ogTitle,
    price,
    slug,
    subtitle,
    title
  },
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement{${defs}}
  }
}`

export const eventPathQuery = groq`
  *[
    _type == "event"
    && defined(slug)
    && ${omitDrafts}
  ][].slug.en.current
`

export const postQuery = groq`{
  "post": *[
    _type == "post"
    && slug.en.current == $slug
    && ${omitDrafts}
  ][0] {
    _createdAt,
    _id,
    _type,
    author->{_type, name, slug},
    body,
    categories[]->{_id, _type, title, slug},
    mainImage,
    ogDescription,
    ogTitle,
    publishedAt,
    slug,
    title
  },
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement{${defs}}
  }
}`

export const postPathQuery = groq`
  *[
    _type == "post"
    && defined(slug)
    && ${omitDrafts}
  ][].slug.en.current
`

// export const postQuery = groq`{
//   "post": *[_type == "post"] | order(publishedAt desc) {
//     _createdAt,
//     _id,
//     _type,
//     author->{_type, name, slug},
//     body{${defs}},
//     categories[]->{_id, _type, title, slug},
//     mainImage,
//     ogDescription,
//     ogTitle,
//     publishedAt,
//     slug,
//     title
//   },
//   "site": *[_type == "site"] | order(date)[0]{
//     ${siteFields}
//   },
//   "statements": *[_type == "statement"] | order(heading){
//     statement{${defs}}
//   }
// }`
