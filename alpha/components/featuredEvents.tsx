import { Fragment } from "react"
import { Localize } from "components/localize"
import { SingleEvent } from "components/singleEvent"
import { Event, Label } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/index.module.scss"

interface Props {
  events: Event[]
  label: Label
}

/**
 * Featured events section
 * @remarks formats one event to be displayed on the homepage as a featured event
 * @returns The JSX Code for the featured event
 */
export function FeaturedEvents({ events, label }: Props) {
  return (
    <section>
      <h2 className={`${s.featuredTitle} ${u.uppercase}`}>
        <Localize data={label.text} />
      </h2>
      <div className={`${s.featured} ${u.grid}`}>
        {events.map((event) => (
          <Fragment key={event._id}>
            <SingleEvent event={event} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
