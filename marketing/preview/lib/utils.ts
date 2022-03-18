import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"

export const urlFor = (source: any) => {
  return imageUrlBuilder(sanityClient).image(source)
}
