
import { FC } from "react"
import { useRouter } from "next/router"
import { pattern, urlFor } from "lib/utils"
import Date from "components/date"
import Link from "components/link"
import { Shape } from "components/icons/shape"
import { Icon } from "components/icons/icon"
import { Event } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/events.module.scss"

interface Props {
  event: Event
}

const SingleEvent: FC<Props> = ({ event }) => {
  const { locale } = useRouter()
  return (
    <article className={`${s.event}`}>
      <Link
        href={`/${event._type}/${event.slug}`}
        className={`${u.noUnderline}`}
        tabIndex={-1}
      >
        <div className={`${s.image} ${pattern(event.pattern)}`}>
          {event.shapeOne && <Shape name={event.shapeOne} />}
          <img
            src={urlFor(event.imageOne)
              .auto("format")
              .quality(85)
              .url()}
            alt={event.title}
            className={`${s[event.classOne]}`}
          />
        </div>
      </Link>
      <header className={`${u.flex}`}>
        <div className={`${s.icon}`}>
          <Link
            href={`/${event._type}/${event.slug}`}
            className={`${u.noUnderline}`}
          >
            <Icon name={event.icon} />
          </Link>
        </div>
        <div>
          {event.dateStart &&
            <span className={`${s.date} ${u.uppercase}`}>
              <Date date={event.dateStart} />
            </span>
          }
          {event.title &&
            <h2 className={`${s.h2} ${u.mono} ${u.bold} ${u.noUnderline}`}>
              <Link
                href={`/${event._type}/${event.slug}`}
                className={`${u.noUnderline}`}
              >
                {locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.title : event.title}
              </Link>
            </h2>
          }
        </div>
      </header>
      {event.summary &&
        <p className={`${s.summary}`}>
          {locale === "cy" && event.__i18n_refs
            ? event.__i18n_refs.summary : event.summary}
        </p>
      }
    </article>
  )
}
export default SingleEvent
