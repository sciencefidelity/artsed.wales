import { FC } from "react"
import { useRouter } from "next/router"
import Date from "components/date"
import Link from "components/link"
import { Event } from "lib/interfaces"

interface Props {
  events: Event[]
}

const Sidebar: FC<Props> = ({ events }) => {
  const { locale } = useRouter()
  return (
    <aside>
      <h2>Upcoming Events</h2>
      <ul style={{
        listStyleType: "none",
        padding: 0
      }}>
        {events.map(e =>
          <li key={e._id} style={{ marginBottom: "1.5rem" }}>
            <Date date={e.dateStart} /><br />
            <Link href={`/${e._type}/${e.slug}`}>
              {locale === "cy" && e.__i18n_refs
                ? e.__i18n_refs.title
                : e.title}
            </Link><br />
            {locale === "cy" && e.__i18n_refs
              ? e.__i18n_refs.summary
              : e.summary}
          </li>
        )}
      </ul>
    </aside>
  )
}
export default Sidebar
