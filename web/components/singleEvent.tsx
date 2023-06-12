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
        <div className={`${s.imageContainer}`}>
          {event.mainImage && (
            <img
              className={`${s.image} ${u.relative}`}
              src={urlFor(event.mainImage)
                .width(468)
                .height(468)
                .auto("format")
                .quality(75)
                .url()}
              srcSet={`${urlFor(event.mainImage)
                .width(300)
                .height(300)
                .auto("format")
                .quality(70)
                .url()} 300w,
              ${urlFor(event.mainImage)
                .width(400)
                .height(400)
                .auto("format")
                .quality(70)
                .url()} 400w,
              ${urlFor(event.mainImage)
                .width(500)
                .height(500)
                .auto("format")
                .quality(70)
                .url()} 500w,
              ${urlFor(event.mainImage)
                .width(600)
                .height(600)
                .auto("format")
                .quality(70)
                .url()} 600w,
              ${urlFor(event.mainImage)
                .width(700)
                .height(700)
                .auto("format")
                .quality(70)
                .url()} 700w,
              ${urlFor(event.mainImage)
                .width(800)
                .height(800)
                .auto("format")
                .quality(70)
                .url()} 800w,
            `}
              height={468}
              width={468}
              alt={event.title}
              loading="eager"
            />
          )}
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
