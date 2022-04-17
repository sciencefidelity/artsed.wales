import htm from "htm"
import vhtml from "vhtml"
import { uriLooksSafe } from "@portabletext/to-html"
import { buildUrl, kebabCase, urlFor } from "lib/utils"

const html = htm.bind(vhtml)
export const portableTextComponents = {
  block: {
    normal: ({children}) => {
      return `
        <p class="sans smooth text-xl font-medium color-650 my-5">${children}</p>
      `
    },
    h2: ({children}) => {
      const id = kebabCase(children)
      return `
        <h2 id="${id}" class="sans heading color-750 relative scroll-mt-10 text-5xl font-bold mb-10 mt-20">
          <a href="#${id}" class="anchor absolute"}>#</a>${children}
        </h2>
      `
    },
    h3: ({children}) => {
      const id = kebabCase(children)
      return `
        <h3 id="${id}" class="sans heading color-750 relative scroll-mt-10 text-4xl font-bold mt-10">
          <a href="#${id}" class="anchor absolute"}>#</a>${children}
        </h3><hr class="hr" />
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
        <ul class="sans font-medium smooth text-xl color-750 list-disc list-inside">${children}</ul>
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
    strong: ({children}) => {
      return `
        <strong class="smooth font-semibold color-750">${children}</strong>
      `
    },
    link: ({children, value}) => {
      const href = value.href || ""
      if (uriLooksSafe(href)) {
        const rel = href.startsWith("/") ? undefined : "noreferrer"
        return `
          <a
            href="${href}"
            rel="${rel}"
            class="color-850 underline"
            target="_blank"
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
