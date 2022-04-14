import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"
import {  } from "lib/interfaces"

export const getNestedHeadings = (titles: SanityBlock[]) => {
  const nestedHeadings = []
  titles.forEach(title => {
    const { style, children } = title
    const { text } = children[0]

    if (title.style === "h2") {
      nestedHeadings.push({ id: style, title: text, items: [] })
    } else if (title.style === "h3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id: style,
        title: text
      })
    }
  })
  return nestedHeadings
}

export const urlFor = source => {
  return imageUrlBuilder(sanityClient).image(source)
}
