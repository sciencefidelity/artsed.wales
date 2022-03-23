import * as React from "react"
import { PortableTextComponents } from "@portabletext/react"

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }: any) => {
      return (
        <p
          style={{
            paddingTop: "5px",
            paddingBottom: "5px",
            margin: "0px",
            fontSize: "16px",
            fontFamily: "-apple-system,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif !important",
            lineHeight: "1.5em",
            fontWeight: 200
          }}
        >
          {children}
        </p>
      )
    }
  },
  marks: {
    link: ({value, children}) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target} rel={target === "_blank" ? "noreferrer" : undefined}
          style={{
            color: "#00ABD6",
            textDecoration: "none"
          }}
        >{children}</a>
      )
    }
  }
}
