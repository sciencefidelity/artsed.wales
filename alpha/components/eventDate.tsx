import { FC } from "react"
import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"
// Fri, 10 Jun 2022, 10:00 – 16:00
// Gwe, 10 Meh 2022, 10:00 – 16:00
interface Props {
  dateEnd: string
  dateStart: string
}

const EventDate: FC<Props> = ({ dateEnd, dateStart }) => {
  const { locale } = useRouter()
  const dateLocale = locale === "cy" ? cy : enGB
  return (
    <time dateTime={dateStart}>
      {format(new Date(dateStart),
        "eee, d MMM yyyy, HH:mm",
        {locale: dateLocale})}
      {" – "}
      {format(new Date(dateEnd),
        "HH:mm",
        {locale: dateLocale})}
    </time>
  )
}
export default EventDate
