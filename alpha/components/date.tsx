import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"
// Saturday, 12 February 2022, 14:00
// dydd Sadwrn, 12 Chwefror 2022, 14:00
const PostDate = ({ date }: { date: string }) => {
  const { locale } = useRouter()
  const dateLocale = locale === "cy" ? cy : enGB
  return (
    <time dateTime={date}>
      {format(new Date(date),
        "eee, d MMM",
        {locale: dateLocale}
      )}
    </time>
  )
}
export default PostDate
