import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "lib/sanityClient"
import { LocaleString, LocaleURL } from "generated/schema"
import { Image } from "lib/interfaces"

export const acronym = (str: string): string => {
  return str.split(" ").map(e => /[A-Z]/.test(e) ? e[0] : "").join("")
}

export const buildUrl = (type: string, slug: string): string => {
  return `${subdir(type)}/${slug}`
}

export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
}

export const keyStage = (str: string): string => {
  return str.split(" ").map(e => e.replace(e, e[0])).join("")
}

export const localize = (
  content: LocaleString | LocaleURL, locale: string
): string => {
  return locale === "cy" && content.cy
    ? content.cy
    : content.en
}

export const subdir = (type: string): string => {
  switch (type) {
  case "author":
    return "/authors"
  case "event":
    return "/events"
  case "facilitator":
    return "/facilitators"
  case "post":
    return "/news"
  case "video":
    return "/videos"
  default:
    return ""
  }
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
