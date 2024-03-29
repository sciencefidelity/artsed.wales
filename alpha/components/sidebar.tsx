import { FC, Fragment } from "react"
import { useRouter } from "next/router"
import { PostDate } from "components/date"
import { LinkTo } from "components/linkTo"
import { Localize } from "components/localize"
import { Icon } from "components/icons/icon"
import { Event, LocaleString } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/sidebar.module.scss"

interface Props {
  events: Event[]
  title: LocaleString
}

const Sidebar: FC<Props> = ({ events, title }) => {
  const { locale } = useRouter()
  return (
    <aside className={`${s.sidebar}`}>
      <h2 className={`${s.heading} ${u.uppercase}`}>
        <Localize data={title} />
      </h2>
      <ul>
        {events &&
          events.map((event) => (
            <Fragment key={event._id}>
              <li className={`${s.event}`}>
                <header className={`${u.flex} ${s.header}`}>
                  <LinkTo href={`/${event._type}/${event.slug}`}>
                    {event.title && (
                      <span className={`${u.screenReaderText}`}>
                        {locale === "cy" && event.__i18n_refs
                          ? event.__i18n_refs.title
                          : event.title}
                      </span>
                    )}
                    <div className={`${s.icon}`}>
                      <Icon name={event.icon ?? "Bolt"} />
                    </div>
                  </LinkTo>
                  <div>
                    {event.dateStart && <PostDate date={event.dateStart} />}
                    <br />
                    {event.title && (
                      <h3 className={`${s.eventHeading} ${u.mono} ${u.bold}`}>
                        <LinkTo href={`/${event._type}/${event.slug}`}>
                          {locale === "cy" && event.__i18n_refs
                            ? event.__i18n_refs.title
                            : event.title}
                        </LinkTo>
                      </h3>
                    )}
                  </div>
                </header>
                {event.summary && (
                  <article className={`${s.summary}`}>
                    {locale === "cy" && event.__i18n_refs
                      ? event.__i18n_refs.summary
                      : event.summary}
                  </article>
                )}
              </li>
            </Fragment>
          ))}
      </ul>
    </aside>
  )
}
export default Sidebar
