import groq from "groq"

export const newsletterQuery = groq`{
  "cy": {
    "newsletter": *[
      _type == "newsletter" && __i18n_lang == "cy"
    ] | order(_createdAt desc)[0]{
      _type,
      "accent": accent.hex,
      body,
      "background": background.hex,
      events[]->{
        _id, _type, dateStart, mainImage, title, summary, britelink
      },
      headline, "logo": logo.asset->.url, mainImage, "slug": slug.current,
      social[]{
        _key, "icon": icon.asset->.url, name, url
      },
      title
    },
    "company": *[_type == "company"][0]{
      "address": address.cy, "title": title.cy
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
      _type,
      "accent": accent.hex,
      body,
      "background": background.hex,
      events[]->{
        _id, _type, dateStart, mainImage, title, summary, britelink
      },
      headline, "logo": logo.asset->.url, mainImage, "slug": slug.current,
      social[]{
        _key, "icon": icon.asset->.url, name, url
      },
      title
    },
    "company": *[_type == "company"][0]{
      "address": address.en, "title": title.en
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
