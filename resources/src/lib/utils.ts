import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"
import { SanityBlock } from "lib/interfaces"

export const buildUrl = (type: string, slug: string): string => {
  return `${subdir(type)}/${slug}`
}

export const getHeadings = (blocks: SanityBlock[]): string[] => {
  const headings: string[] = []
  blocks.forEach(block => {
    const { children } = block
    const { text }: { text: string } = children[0]

    if (block.style === "h2") {
      headings.push(text)
    }
  })
  return headings
}

export const getNestedHeadings = (titles: SanityBlock[]) => {
  const nestedHeadings = []
  titles.forEach(title => {
    const { children } = title
    const { text } = children[0]

    if (title.style === "h2") {
      nestedHeadings.push({ id: kebabCase(text), title: text, items: [] })
    } else if (title.style === "h3" || title.style === "h4" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id: kebabCase(text),
        title: text
      })
    }
  })
  return nestedHeadings
}

export const getNestedMinorHeadings = (titles: SanityBlock[]) => {
  const nestedMinorHeadings = []
  titles.forEach(title => {
    const { children } = title
    const { text } = children[0]

    if (title.style === "h3") {
      nestedMinorHeadings.push({ id: kebabCase(text), title: text, items: [] })
    } else if (title.style === "h4" && nestedMinorHeadings.length > 0) {
      nestedMinorHeadings[nestedMinorHeadings.length - 1].items.push({
        id: kebabCase(text),
        title: text
      })
    }
  })
  return nestedMinorHeadings
}

export const kebabCase = (str: string): string => {
  return str.toLowerCase().split(" ").join("-").replace(/[^a-z0-9-]/g, "")
}

export const subdir = (type: string): string => {
  switch (type) {
  case "author":
    return "/author"
  case "post":
    return "/blog"
  case "tag":
    return "/tag"
  default:
    return ""
  }
}


export const urlFor = source => {
  return imageUrlBuilder(sanityClient).image(source)
}
