import { useRouter } from "next/router"
import { pattern, urlFor } from "lib/utils"
import { PostDate } from "components/date"
import { LinkTo } from "components/linkTo"
import { Shape } from "components/icons/shape"
import { Icon } from "components/icons/icon"
import { Event } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/events.module.scss"

interface Props {
  event: Event
}

export function SingleEvent({ event }: Props) {
  const { locale } = useRouter()
  return (
    <article className={`${s.event}`}>
      <LinkTo
        href={`/${event._type}/${event.slug}`}
        className={`${u.noUnderline}`}
        tabIndex={-1}
      >
        <div className={`${s.image} ${pattern(event.pattern)}`}>
          {event.shapeOne && (
            <div className={`${s[event.shapeOne]}`}>
              <Shape name={event.shapeOne} />
            </div>
          )}
          <img
            src={urlFor(event.imageOne).auto("format").quality(85).url()}
            alt={event.title}
            className={`${s[event.classOne]}`}
            loading="eager"
          />
        </div>
      </LinkTo>
      <header className={`${u.flex}`}>
        <LinkTo
          href={`/${event._type}/${event.slug}`}
          className={`${u.noUnderline}`}
        >
          {event.title && (
            <span className={`${u.screenReaderText}`}>
              {locale === "cy" && event.__i18n_refs
                ? event.__i18n_refs.title
                : event.title}
            </span>
          )}
          <div className={`${s.icon}`}>
            <Icon name={event.icon} />
          </div>
        </LinkTo>
        <div>
          {event.dateStart && (
            <span className={`${s.date} ${u.uppercase}`}>
              <PostDate date={event.dateStart} />
            </span>
          )}
          {event.title && (
            <h2 className={`${s.h2} ${u.mono} ${u.bold} ${u.noUnderline}`}>
              <LinkTo
                href={`/${event._type}/${event.slug}`}
                className={`${u.noUnderline}`}
              >
                {locale === "cy" && event.__i18n_refs
                  ? event.__i18n_refs.title
                  : event.title}
              </LinkTo>
            </h2>
          )}
        </div>
      </header>
      {event.summary && (
        <p className={`${s.summary} ${u.ellipsis2}`}>
          {locale === "cy" && event.__i18n_refs
            ? event.__i18n_refs.summary
            : event.summary}
        </p>
      )}
    </article>
  )
}
