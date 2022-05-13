import { FC } from "react"
import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"

interface PostDateProps { date: string }
interface EventDateProps {
  dateEnd?: string
  dateStart: string
}

export const PostDate: FC<PostDateProps> = ({ date }) => {
  const { locale } = useRouter()
  const dateLocale = locale === "cy" ? cy : enGB
  return (
    date && <time dateTime={date}>
      {format(new Date(date), "eee, d MMM", {locale: dateLocale})}
    </time>
  )
}

export const EventDate: FC<EventDateProps> = ({ dateEnd, dateStart }) => {
  const { locale } = useRouter()
  const dateLocale = locale === "cy" ? cy : enGB
  return (
    <>
      {dateStart && <time dateTime={dateStart}>
        {format(new Date(dateStart), "eee, d MMM", {locale: dateLocale})}
      </time>}{", "}
      {format(new Date(dateStart), "HH:mm", {locale: dateLocale})}
      {dateEnd && " – "}
      {dateEnd && format(new Date(dateEnd), "HH:mm", {locale: dateLocale})}
    </>
  )
}
