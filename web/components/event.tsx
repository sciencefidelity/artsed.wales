import { FC } from "react"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import Localize from "components/localize"
import Markdown from "components/markdown"
import Date from "components/date"
import { EventProps } from "lib/interfaces"
import s from "pages/courses.module.scss"
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
        <h3 className={`${s.courseSubitle} ${u.serif}`}>
          <Localize data={event.subtitle} />
        </h3>
        <div><hr style={{ marginBottom: "3rem" }}/></div>
        {event.date && <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          <Date date={event.date} />
        </div>}
        {event.date2 && <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          <Date date={event.date2} />
        </div>}
        <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          {event.location && <Localize data={event.location} />}
          {event.location && ", "}
          {event.price && "£" + (locale === "cy" ? " " : "") + event.price}
        </div>
        {event.body && <div className={u.fAuto}>
          <Markdown content={event.body} />
        </div>}
        {event.artforms[0] &&
          <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
            <ul style={{ margin: 0, marginTop: "2rem", padding: 0 }}>
              {locale === "cy" ? "Ffurfiau ar gelfyddyd: " : "Artforms: "}
              {event.artforms.map(artform =>
                <li className={s.horizontal} key={artform._id}>
                  <Localize data={artform.title} />
                </li>
              )}
            </ul>
          </div>
        }
        {event.keystages[0] &&
          <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
            <ul style={{ margin: 0, padding: 0 }}>
              {locale === "cy" ? "Cyfnod Allweddol: " : "Key Stage: "}
              {event.keystages.map(keystage =>
                <li className={s.horizontal} key={keystage._id}>
                  <Localize data={keystage.title} />
                </li>
              )}
            </ul>
          </div>
        }
        {event.people &&
          <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
            <ul style={{ margin: 0, padding: 0 }}>
              {locale === "cy" ? "Arweinir gan: " : "Led by: "}
              {event.people.map(person =>
                <li className={s.horizontal} key={person._id}>
                  {person.name}
                </li>
              )}
            </ul>
          </div>
        }
        <div className={u.fNone}>
          <a
            href={localize(event.britelink, locale)}
            className={s.britelink}
            target="_blank"
            rel="noreferrer"
          >
            <button className={s.britelinkBtn}>
              {locale === "cy" ? "Archebwch nawr" : "Book now"}
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
export default Event
