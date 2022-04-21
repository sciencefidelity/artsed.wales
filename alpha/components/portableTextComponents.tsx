import { PortableTextComponents } from "@portabletext/react"
import { buildUrl } from "lib/utils"
import Link from "components/link"

export const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target} rel={target === "_blank" ? "noreferrer" : undefined}
        >{children}</a>
      )
    },
    internalLink: ({value, children}) => {
      const url = buildUrl(value.item._type, value.item.slug.en.current)
      return (
        <Link href={url}>{children}</Link>
      )
    }
  }
}
