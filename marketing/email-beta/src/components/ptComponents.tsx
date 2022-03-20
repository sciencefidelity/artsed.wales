import * as React from "react"
import { PortableTextComponents } from "@portabletext/react"

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }: any) => {
      return <p className="m-0 py-5 px-0 sans font-200 leading-6">{children}</p>
    }
  },
  marks: {
    link: ({value, children}) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target} rel={target === "_blank" ? "noreferrer" : undefined}
          className="text-accent no-underline hover:underline"
        >{children}</a>
      )
    }
  }
}
