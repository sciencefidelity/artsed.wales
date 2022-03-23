import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"

export const urlFor = source => {
  return imageUrlBuilder(sanityClient).image(source)
}

export const capitalize = (str: string): string => {
    return str
      .split(/[\s-]/g)
      .map(e => e.replace(e[0], e[0].toUpperCase()))
      .join(" ")
  }
