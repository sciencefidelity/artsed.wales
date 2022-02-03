import { FC } from "react"
// import Image from "next/image"
import { urlFor } from "lib/utils"
import PostDate from "components/postDate"
import { EventProps } from "lib/interfaces"
import s from "components/event.module.scss"
// import u from "styles/utils.module.scss"

const Event: FC<EventProps> = ({ event }) => {
  return (
    <>
{/*       <div className={s.cardImageContainer}>
        <img
          src={urlFor(event.mainImage)
            .auto("format")
            .width(448)
            .height(300)
            .quality(75)
            .url()}
          width={488}
          height={300}
          alt={event.title.en}
          className={s.cardImage}
        />
      </div> */}
      <div className={s.cardText}>
        <h2>{event.title.en}</h2>
        <h3 className={s.courseDate}><PostDate date={event.date} /></h3>
        <h4 className={s.courseLocation}>{event.location}</h4>
        <h4 className={s.coursePrice}>£{event.price}</h4>
        <p>{event.body.en}</p>
        <a href={event.britelink} target="_blank" rel="noreferrer">
          <button className={s.britelink}>Book now!</button>
        </a>
      </div>
    </>
  )
}
export default Event
