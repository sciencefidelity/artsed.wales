import { FC } from "react"
import { useRouter } from "next/router"
import Date from "components/date"
import Link from "components/link"
import { Event } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/events.module.scss"
import p from "styles/patterns.module.scss"

interface Props {
  event: Event
  idx: number
}

const patterns = [p.cubes, p.lines, p.circles, p.squares, p.linesDiagonal]
const images = ["head"]
const imageClasses = [s.head]

const SingleEvent: FC<Props> = ({ event, idx }) => {
  const { locale } = useRouter()
  return (
    <article className={`${s.event}`}>
      <div className={`${s.eventImage} ${patterns[idx]}`}>
        <img
          className={`${imageClasses[idx]}`}
          src={`/images/${images[idx]}.png`}
        />
      </div>
      {event.dateStart &&
        <span className={`${s.eventDate} ${u.uppercase}`}>
          <Date date={event.dateStart} />
        </span>
      }
      {event.title &&
        <h2 className={`${s.eventTitle} ${u.mono} ${u.bold} ${u.noUnderline}`}>
          <Link
            href={`/${event._type}/${event.slug}`}
            className={`${u.noUnderline}`}
          >
            {locale === "cy" && event.__i18n_refs
              ? event.__i18n_refs.title
              : event.title}
          </Link>
        </h2>
      }
      {event.summary &&
        <p className={`${s.eventSummary}`}>
          {locale === "cy" && event.__i18n_refs
            ? event.__i18n_refs.summary
            : event.summary}
        </p>
      }
    </article>
  )
}
export default SingleEvent
