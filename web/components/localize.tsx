import { useRouter } from "next/router"
import type { LocaleMarkdown, LocaleString } from "generated/schema"

const Localize = ({ data }: {
  data: LocaleString | LocaleMarkdown
}) => {
  const { locale } = useRouter()
  return (
    <>{locale === "cy" && data.cy ? data.cy : data.en}</>
  )
}
export default Localize
