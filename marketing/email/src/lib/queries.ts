import groq from "groq"

export const newsletterQuery = groq`{
  "cy": {
    "newsletter": *[
      _type == "newsletter" && __i18n_lang == "cy"
    ] | order(_createdAt desc)[0]{
      __i18n_lang, body, headline, logo, mainImage, title
    },
    "company": *[_type == "company"][0]{
      "address": address.cy, "title": title.cy
    },
    "events": *[_type == "event" && __i18n_lang == "cy"] | order(dateStart){
      _id, _type, dateStart, mainImage, title, summary, britelink
    },
    "labels": {
      "browser": *[_type == "labelGroup"][0]
        .labels[key == "email.browser"][0].text.cy,
      "change": *[_type == "labelGroup"][0]
        .labels[key == "email.change"][0].text.cy,
      "unsubscribe": *[_type == "labelGroup"][0]
        .labels[key == "email.unsubscribe"][0].text.cy,
      "register": *[_type == "labelGroup"][0]
        .labels[key == "email.register"][0].text.cy
    },
    "settings": *[_type == "settings"][1]{
      "url": url.cy
    }
  },
  "en": {
    "newsletter": *[
      _type == "newsletter" && __i18n_lang == "en"
    ] | order(_createdAt desc)[0]{
      __i18n_lang, body, headline, "logo": logo.asset->{url}, mainImage, title
    },
    "company": *[_type == "company"][0]{
      "address": address.en, "title": title.en
    },
    "events": *[_type == "event" && __i18n_lang == "en"] | order(dateStart){
      _id, _type, dateStart, mainImage, title, summary, britelink
    },
    "labels": {
      "browser": *[_type == "labelGroup"][0]
        .labels[key == "email.browser"][0].text.en,
      "change": *[_type == "labelGroup"][0]
        .labels[key == "email.change"][0].text.en,
      "unsubscribe": *[_type == "labelGroup"][0]
        .labels[key == "email.unsubscribe"][0].text.en,
      "register": *[_type == "labelGroup"][0]
        .labels[key == "email.register"][0].text.en
    },
    "settings": *[_type == "settings"][1]{
      "url": url.en
    }
  }
}`
