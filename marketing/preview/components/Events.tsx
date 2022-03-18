import React, { FC } from "react"
import format from "date-fns/format"
// import { cy } from 'date-fns/locale'
import { urlFor } from "../lib/utils"

interface Props {
  en: any
}

const Events: FC<Props> = ({en}) => (
  <table
    className="events"
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className="events__row">
      <td className="events__data">
        {en.events.map(event => (
          <table
            className="event"
            // border="0"
            cellPadding="0"
            cellSpacing="0"
            key={event._id}
          >
            <tr className="event__row">
              <th className="event__head">
                <a href="#">
                  <img
                    src={urlFor(event.mainImage)
                      .auto("format")
                      .width(600)
                      .height(400)
                      .quality(80)
                      .url()}
                    className="image__inset"
                    alt="Expressive arts for wellbeing (Key Stage 2)"
                    width="300"
                    height="200"
                  />
                </a>
                <time dateTime={
                  format(new Date(event.dateStart), "yyyy-MM-dd")
                }>
                  {format(new Date(event.dateStart), "d MMMM yyyy, k:mm")}
                </time>
                <h2>{event.title}</h2>
                <p>{event.summary}</p>
                <p>
                  <a href={event.britelink}>{en.labels.register}</a>
                </p>
              </th>
            </tr>
          </table>
        ))}
      </td>
    </tr>
  </table>
)
export default Events
