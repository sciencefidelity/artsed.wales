import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"

interface PostDateProps {
  date: string
}

interface EventDateProps {
  dateEnd?: string
  dateStart: string
}

/**
 * Formats the date of a post or event
 * @remarks uses the `date-fns` library, used in the post template
 * @param date - that date to be formatted
 * @returns A string of the formatted date
 */
export function PostDate({ date }: PostDateProps) {
  const { locale } = useRouter()
  const dateLocale = locale === "cy" ? cy : enGB
  return (
    date && (
      <time dateTime={date}>
        {format(new Date(date), "eee, d MMM", { locale: dateLocale })}
      </time>
    )
  )
}

/**
 * Formats the date of an event with a start and end date
 * @remarks uses the `date-fns` library, used in the event page and sidebar
 * @param dateEnd - the end date of the event
 * @param dateStart - the start date of the event
 * @returns A string of the formatted dates
 */
export function EventDate({ dateEnd, dateStart }: EventDateProps) {
  const { locale } = useRouter()
  const dateLocale = locale === "cy" ? cy : enGB
  return (
    <>
      {dateStart && (
        <time dateTime={dateStart}>
          {format(new Date(dateStart), "eee, d MMM", { locale: dateLocale })}
        </time>
      )}
      {", "}
      {format(new Date(dateStart), "HH:mm", { locale: dateLocale })}
      {dateEnd && " – "}
      {dateEnd && format(new Date(dateEnd), "HH:mm", { locale: dateLocale })}
    </>
  )
}

EventDate.defaultProps = {
  dateEnd: undefined,
}
