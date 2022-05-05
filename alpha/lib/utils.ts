import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "lib/sanityClient"
import { LocaleString } from "lib/interfaces"
import { Image, Staff } from "lib/interfaces"
import p from "styles/patterns.module.scss"

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

export const joinName = (name: string) => {
  return name.split(" ").join("&nbsp;")
}

export const keyStage = (str: string): string => {
  return str.split(" ").map(e => e.replace(e, e[0])).join("")
}

export const localize = (
  content: LocaleString, locale: string
): string => {
  return locale === "cy" && content.cy
    ? content.cy
    : content.en
}

export const localizeRoles = (type: string): string => {
  switch (type) {
  case "Author":
    return "Awdur"
  case "Chair":
    return "Cadeirydd"
  case "Co-ordinator":
    return "Cydlynydd"
  case "Facilitator":
    return "Hwylusydd"
  case "Trustee":
    return "Ymddiriedolwr"
  default:
    return ""
  }
}

export const pattern = (pattern: string): string => {
  switch (pattern) {
  case "cubes":
    return p.cubes
  case "lines":
    return p.lines
  case "dots":
    return p.dots
  case "circles":
    return p.circles
  case "linesVertical":
    return p.linesVertical
  case "squares":
    return p.squares
  case "linesDiagonal":
    return p.linesDiagonal
  case "diagonal":
    return p.diagonal
  case "textbook":
    return p.textbook
  case "target":
    return p.target
  case "repeatingCircles":
    return p.repeatingCircles
  case "radial":
    return p.radial
  case "zigzag":
    return p.zigzag
  case "isometric":
    return p.isometric
  case "isometric3d":
    return p.isometric3d
  case "cross":
    return p.cross
  default:
    return p.lines
  }
}

export const sortNames = (names: Staff[]): Staff[] => {
  return names.sort((a, b) => {
    return a.title.split(" ").pop().localeCompare(b.title.split(" ").pop())
  })
}

export const subdir = (type: string): string => {
  switch (type) {
  case "artform":
    return "/artform"
  case "event":
    return "/event"
  case "keystage":
    return "/keystage"
  case "post":
    return "/news"
  case "staff":
    return "/staff"
  case "tag":
    return "/tag"
  case "video":
    return "/video"
  default:
    return ""
  }
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
