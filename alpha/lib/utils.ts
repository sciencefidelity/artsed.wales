import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "lib/sanityClient"
import { LocaleString, LocaleURL } from "generated/schema"
import { Image } from "lib/interfaces"

export const acronym = (str: string): string => {
  return str.split(" ").map(e => /[A-Z]/.test(e) ? e[0] : "").join("")
}

export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
}

export const localize = (
  content: LocaleString | LocaleURL, locale: string
): string => {
  return locale === "cy" && content.cy
    ? content.cy
    : content.en
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
