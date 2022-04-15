import htm from "htm"
import vhtml from "vhtml"
import { uriLooksSafe } from "@portabletext/to-html"
import { buildUrl, kebabCase, urlFor } from "lib/utils"

const html = htm.bind(vhtml)
export const portableTextComponents = {
  block: {
    normal: ({children}) => {
      return `
        <p class="">${children}</p>
      `
    },
    h2: ({children}) => {
      const id = kebabCase(children)
      return `
        <h2 id="${id}" class="heading relative scroll-mt-5 text-3xl font-bold">
          <a href="#${id}" class="anchor absolute"}>#</a>${children}
        </h2>
      `
    },
    h3: ({children}) => {
      const id = kebabCase(children)
      return `
        <h3 id="${id}" class="heading relative scroll-mt-5 text-2xl font-bold">
          <a href="#${id}" class="anchor absolute"}>#</a>${children}
        </h3>
      `
    },
    blockquote: ({children}) => {
      return `
        <blockquote class="">${children}</blockquote>
      `
    }
  },
  list: {
    bullet: ({children}) => {
      return `
        <ul class="">${children}</ul>
      `
    }
  },
  listItem: {
    bullet: ({children}) => {
      return `
        <li class="">${children}</li>
      `
    }
  },
  marks: {
    link: ({children, value}) => {
      const href = value.href || ""
      if (uriLooksSafe(href)) {
        const rel = href.startsWith("/") ? undefined : "noreferrer"
        return `
          <a
            href="${href}"
            rel="${rel}"
            class=""
          >${children}</a>
        `
      }
      return children
    },
    internalLink: ({children, value}) => {
      return `
        <a
          href=${buildUrl(value?.item._type, value?.item.slug)}
          class=""
        >${children}</a>
      `
    }
  },
  types: {
    image: ({value}) => {
      return `
        <img
          src=${urlFor(value)
            .auto("format")
            .width(2400)
            .quality(85)
            .url()}
          class=""
        />
      `
    }
  }
}
