import { useRouter } from "next/router"
import type { LocaleString } from "lib/interfaces"

export const Localize = ({ data }: {
  data: LocaleString
}) => {
  const { locale } = useRouter()
  return (
    <>{locale === "cy" && data.cy ? data.cy : data.en}</>
  )
}
