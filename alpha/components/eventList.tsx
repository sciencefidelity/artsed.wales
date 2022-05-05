import { FC } from "react"
import { useRouter } from "next/router"
import { PostDate } from "components/date"
import { Icon } from "components/icons/icon"
import { LinkTo } from "components/linkTo"
import { Event } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/eventList.module.scss"

interface Props {
  event: Event
}

export const EventList: FC<Props> = ({ event }) => {
  const { locale } = useRouter()
  return (
    <div className={`${s.event}`}>
      <header className={`${u.flex} ${s.header}`}>
        <div className={`${s.icon}`}>
          <LinkTo href={`/${event._type}/${event.slug}`}>
            {event.title && <span className={`${u.screenReaderText}`}>
              {locale === "cy" && event.__i18n_refs
                ? event.__i18n_refs.title : event.title}
            </span>}
            <Icon name={event.icon ? event.icon : "Bolt"} />
          </LinkTo>
        </div>
        <div>
          {event.dateStart && <PostDate date={event.dateStart} />}
          {event.title &&
            <h3 className={`${s.heading} ${u.mono} ${u.bold}`}>
              <LinkTo href={`/${event._type}/${event.slug}`}>
                {locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.title : event.title}
              </LinkTo>
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
