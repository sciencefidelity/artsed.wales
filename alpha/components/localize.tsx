import { useRouter } from "next/router"
import type { LocaleEmail, LocaleString } from "generated/schema"

const Localize = ({ data }: {
  data: LocaleString | LocaleEmail
}) => {
  const { locale } = useRouter()
  return (
    <>{locale === "cy" && data.cy ? data.cy : data.en}</>
  )
}
export default Localize
