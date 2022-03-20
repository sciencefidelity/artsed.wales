import * as React from "react"
import { PortableTextComponents } from "@portabletext/react"

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }: any) => {
      return (
        <p
          className="m-0 py-5 px-0 sans font-200 leading-6"
          style={{
            margin: "0px",
            paddingTop: "5px",
            paddingRight: "0px",
            paddingBottom: "5px",
            paddingLeft: "0px",
            fontFamily: "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif !important",
            lineHeight: "1.5em"
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
          className="text-accent no-underline hover:underline"
          style={{
            color: "#00ABD6",
            textDecoration: "none"
          }}
        >{children}</a>
      )
    }
  }
}
