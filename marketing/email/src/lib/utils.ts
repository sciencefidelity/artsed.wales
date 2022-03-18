import htm from "htm"
import vhtml from "vhtml"
import { uriLooksSafe } from "@portabletext/to-html"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"

const html = htm.bind(vhtml)
export const portableTextComponents = {
  marks: {
    link: ({children, value}) => {
      const href = value.href || ""
      if (uriLooksSafe(href)) {
        const rel = href.startsWith("/") ? undefined : "noreferrer"
        return html`
          <a href="${href}" rel="${rel}">
            ${children}
          </a>
        `
      }
      return children
    }
  }
}

export const urlFor = source => {
  return imageUrlBuilder(sanityClient).image(source)
}
