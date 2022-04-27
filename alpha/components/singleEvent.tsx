import { FC } from "react"
import { useRouter } from "next/router"
import Date from "components/date"
import Link from "components/link"
import { Circle, DashedCircle, StripedCircle, Triange } from "components/icons/shapes"
import { Bolt, Landmark, MasksTheatre, Pencil, TreeCity } from "components/icons/icons"
import { Event } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/events.module.scss"
import p from "styles/patterns.module.scss"

interface Props {
  event: Event
  idx: number
}

const patterns = [p.cubes, p.lines, p.circles, p.isometric, p.linesDiagonal]
const images = ["head", "whale", "globe", "tree", "dance"]
const imageClasses = [s.head, s.whale, s.globe, s.tree, s.dance]
const shapes = [<DashedCircle />, , <Triange />, <StripedCircle />, <Circle />]
const icons = [<Landmark />, <Pencil />, <MasksTheatre />, <TreeCity />, <Bolt />]

const SingleEvent: FC<Props> = ({ event, idx }) => {
  const { locale } = useRouter()
  return (
    <article className={`${s.event}`}>
      <Link
        href={`/${event._type}/${event.slug}`}
        className={`${u.noUnderline}`}
        tabIndex={-1}
      >
        <div className={`${s.eventImage} ${patterns[idx]}`}>
          {shapes[idx] && shapes[idx]}
          <img
            className={`${u.absolute} ${imageClasses[idx]}`}
            src={`/images/${images[idx]}.png`}
          />
        </div>
      </Link>

      <div className={`${u.flex}`}>
        <div className={`${s.icon}`}>{icons[idx]}</div>
        <div>
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
        </div>
      </div>

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
