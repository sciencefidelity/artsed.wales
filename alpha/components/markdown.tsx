import { createElement, Fragment, useEffect, useState } from "react"
import { unified } from "unified"
import remarkParse from "remark-parse"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import { MarkdownLink } from "components/markdownLink"

export const Markdown = ({ children }: { children: any }) => {
  const [content, setContent] = useState(undefined)
  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
          a: MarkdownLink,
        },
      })
      .process(children)
      .then((file) => {
        setContent(file.result)
      })
  }, [children])
  return content
}
