import { FC } from "react"
import { useRouter } from "next/router"
import Date from "components/date"
import { Icon } from "components/icons/icon"
import Link from "components/link"
import { Event } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/eventList.module.scss"

interface Props {
  event: Event
}

export const EventList: FC<Props> = ({ event }) => {
  const { locale } = useRouter()
  return (
    <div className={`${s.event}`} key={event._id}>
      <header className={`${u.flex} ${s.header}`}>
        <div className={`${s.icon}`}>
          <Link href={`/${event._type}/${event.slug}`}>
            <Icon name={event.icon ? event.icon : "Bolt"} />
          </Link>
        </div>
        <div>
          {event.dateStart && <Date date={event.dateStart} />}
          {event.title &&
            <h3 className={`${s.heading} ${u.mono} ${u.bold}`}>
              <Link href={`/${event._type}/${event.slug}`}>
                {locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.title : event.title}
              </Link>
            </h3>
          }
        </div>
      </header>
      {event.summary &&
        <article>
          <p className={`${s.summary}`}>
            {locale === "cy" && event.__i18n_refs
              ? event.__i18n_refs.summary : event.summary}
          </p>
        </article>
      }
    </div>
  )
}
