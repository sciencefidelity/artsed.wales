import { FC } from "react"
import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"

interface PostDateProps { date: string }
interface EventDateProps {
  dateEnd: string
  dateStart: string
}

// Saturday, 12 February 2022, 14:00
// dydd Sadwrn, 12 Chwefror 2022, 14:00
export const PostDate: FC<PostDateProps> = ({ date }) => {
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

// Fri, 10 Jun 2022, 10:00 – 16:00
// Gwe, 10 Meh 2022, 10:00 – 16:00
export const EventDate: FC<EventDateProps> = ({ dateEnd, dateStart }) => {
  const { locale } = useRouter()
  const dateLocale = locale === "cy" ? cy : enGB
  return (
    <time dateTime={format(new Date(dateStart), "yyyy-MM-dd")}>
      {format(new Date(dateStart),
        "eee, d MMM, HH:mm",
        {locale: dateLocale})}
      {" "}&#8211;{" "}
      {format(new Date(dateEnd),
        "HH:mm",
        {locale: dateLocale})}
    </time>
  )
}
