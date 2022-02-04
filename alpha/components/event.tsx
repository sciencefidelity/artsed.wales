import { FC } from "react"
// import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "lib/utils"
import Localize from "components/localize"
import Markdown from "components/markdown"
import PostDate from "components/postDate"
import { EventProps } from "lib/interfaces"
import s from "components/event.module.scss"
import u from "styles/utils.module.scss"

const Event: FC<EventProps> = ({ event }) => {
  const { locale } = useRouter()
  return (
    <>
      <div className={s.cardImageContainer}>
        <img
          src={urlFor(event.mainImage)
            .auto("format")
            .width(896)
            .height(600)
            .quality(85)
            .url()}
          width={488}
          height={300}
          alt={event.title.en}
          className={s.cardImage}
          loading="lazy"
        />
      </div>
      <div className={s.cardText}>
        <h2 className={s.courseTitle}><Localize data={event.title} /></h2>
        <h3 className={`${s.courseSubitle} ${u.serif}`}><Localize data={event.subtitle} /></h3>
        <div><hr style={{ marginBottom: "3rem" }}/></div>
        <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          <PostDate date={event.date} />{", "}
          {event.location}{", "}
          £{locale === "cy" ? " " : ""}{event.price}
        </div>
        <div className={u.fAuto}><Markdown content={event.body} /></div>
        <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          <ul style={{ margin: 0, marginTop: "2rem", padding: 0 }}>
            {"Artforms: "}{event.artforms.map(artform =>
              <li className={s.horizontal}>{artform.title.en}</li>
            )}
          </ul>
        </div>
        <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          <ul style={{ margin: 0, padding: 0 }}>
            {"Key-Stage: "}{event.keystages.map(keystage =>
              <li className={s.horizontal}>{keystage.title.en}</li>
            )}
          </ul>
        </div>
        <div className={u.fNone}>
          <a
            href={event.britelink}
            className={s.britelink}
            target="_blank"
            rel="noreferrer"
          >
            <button className={s.britelinkBtn}>Book now</button>
          </a>
        </div>
      </div>
    </>
  )
}
export default Event
