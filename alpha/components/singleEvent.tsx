import { FC } from "react"
import { useRouter } from "next/router"
import EventDate from "components/eventDate"
import Link from "components/link"
import { Event } from "lib/interfaces"

interface Props {
  event: Event
}

const SingleEvent: FC<Props> = ({ event }) => {
  const { locale } = useRouter()
  return (
    <div key={event._id}>
      {event.title &&
        <h2>
          <Link href={`/${event._type}/${event.slug}`}>
            {locale === "cy" && event.__i18n_refs
              ? event.__i18n_refs.title
              : event.title}
          </Link>
        </h2>
      }
      {event.summary &&
        <p>
          {locale === "cy" && event.__i18n_refs
            ? event.__i18n_refs.summary
            : event.summary}
        </p>
      }
      {event.dateStart &&
        <EventDate
          dateEnd={event.dateEnd}
          dateStart={event.dateStart}
        />
      }
    </div>
  )
}
export default SingleEvent
