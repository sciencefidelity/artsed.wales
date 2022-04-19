import htm from "htm"
import vhtml from "vhtml"
import { marked } from "marked"
import getYouTubeID from "get-youtube-id"
import { uriLooksSafe } from "@portabletext/to-html"
import { buildUrl, kebabCase, urlFor } from "lib/utils"

const html = htm.bind(vhtml)
export const portableTextComponents = {
  block: {
    normal: ({children}) => {
      return `
        <p class="sans smooth text-xl font-medium color-650 my-5">
          ${children}
        </p>
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
    h4: ({children}) => {
      const id = kebabCase(children)
      return `
        <h4 id="${id}" class="sans heading color-750 relative scroll-mt-10 text-3xl font-semibold mt-10">
          <a href="#${id}" class="anchor absolute"}>#</a>${children}
        </h4>
      `
    },
    blockquote: ({children}) => {
      return `
        <blockquote class="pl-5 color-650 text-base font-medium italic leading-6">
          ${children}
        </blockquote>
      `
    }
  },
  list: {
    bullet: ({children}) => {
      return `
        <ul class="sans smooth font-medium text-xl color-650 list-dash ml-5">
          ${children}
        </ul>
      `
    },
    number: ({children}) => {
      return `
        <ol class="sans smooth font-medium text-xl color-650 list-decimal ml-5 mt-5">
          ${children}
        </ol>
      `
    }
  },
  listItem: {
    bullet: ({children}) => {
      return `
        <li class="hello">${children}</li>
      `
    },
    number: ({children}) => {
      return `
        <li class="goodbye">${children}</li>
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
    },
    target: ({children, value}) => {
      return `
        <a
          href=${value.target}
          class="underline color-750"
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
          class="mt-8 mb-10"
        />
      `
    },
    imageGroup: ({value}) => {
      const children = []
      for (let i = 0; i < value.image.length; i++) {
        children.push(`<img
          src=${urlFor(value.image[i])
            .auto("format")
            .width(300)
            .quality(85)
            .url()}
        />`)
      }
      return `
        <div
          class="grid gap-3 mt-8 mb-10"
          style="grid-template-columns: repeat(${value.image.length}, 1fr);"
        >${children.join("")}</div>
      `
    },
    markdown: ({value}) => {
      return `
        <span>${marked.parse(value.markdown)}</span>
      `
    },
    youtube: ({value}) => {
      const id = getYouTubeID(value.url)
      const url = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1`
      return `
        <div class="embed-container mt-10">
          <iframe
            width="560"
            height="315"
            src=${url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      `
    }
  }
}
