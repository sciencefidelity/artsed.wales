import { FC } from "react"
import { useRouter } from "next/router"
import Date from "components/date"
import Link from "components/link"
import Localize from "components/localize"
import { Event, LocaleString } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  events: Event[]
  title: LocaleString
}

const Sidebar: FC<Props> = ({ events, title }) => {
  const { locale } = useRouter()
  return (
    <aside className={`${s.sidebar}`}>
      <h2 className={`${s.sidebarHeading}`}><Localize data={title} /></h2>
      <ul>
        {events.map(e =>
          <li key={e._id} className={`${s.sidebarItem}`}>
            <Date date={e.dateStart} /><br />
            <h3 className={`${u.mono} ${u.bold}`}>
              <Link href={`/${e._type}/${e.slug}`}>
                {locale === "cy" && e.__i18n_refs
                  ? e.__i18n_refs.title
                  : e.title}
              </Link>
            </h3>
            <p>
            {locale === "cy" && e.__i18n_refs
              ? e.__i18n_refs.summary
              : e.summary}
            </p>
          </li>
        )}
      </ul>
    </aside>
  )
}
export default Sidebar
