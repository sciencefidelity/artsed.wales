import { FC } from "react"
import { useRouter } from "next/router"
import { Remark } from "react-remark"
import { MarkdownProps } from "lib/interfaces"

const Markdown: FC<MarkdownProps> = ({ content }) => {
  const { locale } = useRouter()
  return (
    <Remark>{locale === "cy" && content.cy ? content.cy : content.en}</Remark>
  )
}
export default Markdown
