import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"
// Saturday, 12 February 2022, 14:00
// dydd Sadwrn, 12 Chwefror 2022, 14:00
const PostDate = ({ date }: { date: string }) => {
  const { locale } = useRouter()
  return (
    <>
      {locale === "cy"
        ? format(new Date(date),
          "eeee, d MMMM yyyy, HH:mm",
          {locale: cy}
        )
        : format(new Date(date),
          "eeee, d MMMM yyyy, HH:mm",
          {locale: enGB}
        )
      }
    </>
  )
}
export default PostDate
