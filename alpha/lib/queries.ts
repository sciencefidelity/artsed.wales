import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"

const slug = `"slug": slug.current`

const body = `
  body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }
`

export const events = groq`{
  "events": *[_type == "event" && ${omitDrafts}] | order(dateStart){
    __i18_lang, _id, _type, ${body}, dateEnd, dateStart,
    facilitators[]->{
      __i18n_lang, _id, _type, avatar, role, ${slug}, title
    },
    keystage[]->{ __i18n_lang, _id, _type, description, ${slug}, title },
    location, price, ${slug}, summary, title
  }
}`



