import { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { keyStage, localize, urlFor } from "lib/utils"
import { components } from "components/portableTextComponents"
import Link from "components/link"
import Localize from "components/localize"
import Date from "components/date"
import { EventProps } from "lib/interfaces"
import s from "pages/courses.module.scss"
import u from "styles/utils.module.scss"

declare module "react" {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    rel?: string
  }
}

const Event: FC<EventProps> = ({ event }) => {
  const { locale } = useRouter()
  const blocks = locale === "cy" && event.body.cy ? event.body.cy : event.body.en
  return (
    <>
      <div
        className={s.cardImageContainer}
        id={locale === "cy" ? event.slug.cy.current : event.slug.en.current}
      >
        <Link href={`/courses/${event.slug.en.current}`}>
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
        </Link>
      </div>
      <div className={s.cardText}>
        <Link
          href={`/courses/${event.slug.en.current}`}
          className={u.noUnderline}
        >
          <h2 className={s.courseTitle}><Localize data={event.title} /></h2>
        </Link>
        <h3 className={`${s.courseSubitle} ${u.serif}`}>
          <Localize data={event.subtitle} />
        </h3>
        <div><hr style={{ marginBottom: "3rem" }}/></div>
        {event.date ? (
          <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
            <Date date={event.date} />
          </div>
        ) : (
          <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
            {locale === "cy" ? "Dyddiad i'w gyhoeddi" : "Date TBA"}
          </div>
        )}
        {event.date2 && <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          <Date date={event.date2} />
        </div>}
        <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
          {event.location && <Localize data={event.location} />}
          {event.location && ", "}
          {event.price && "£" + event.price}
        </div>
        {event.body && <div className={u.fAuto}>
          <PortableText value={blocks} components={components} />
        </div>}
        {event.artforms[0] &&
          <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
            <ul style={{ margin: 0, marginTop: "2rem", padding: 0 }}>
              {locale === "cy" ? "Ffurfiau celf: " : "Artforms: "}
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
                  {locale === "cy" && keystage.title.cy
                    ? keyStage(keystage.title.cy)
                    : keyStage(keystage.title.en)}
                </li>
              )}
            </ul>
          </div>
        }
        {event.people &&
          <div className={`${s.courseInfo} ${u.inline} ${u.sans}`}>
            <ul style={{ margin: 0, padding: 0 }}>
              {locale === "cy" ? "Dan arweiniad: " : "Led by: "}
              {event.people.map(person =>
                <li className={s.horizontal} key={person._id}>
                  {person.name}
                </li>
              )}
            </ul>
          </div>
        }
        <div>
          <form
            action={
              event.britelink ? localize(event.britelink, locale) : undefined
            }
            className={s.britelink}
            rel="external noreferrer"
            target="_blank"
          >
            <button
              type="submit"
              value="Book on Eventbrite"
              className={`${s.britelinkBtn}
                ${u.fgDark}
                ${event.date === null && s.disabled}`}
              disabled={event.date === null}
            >
              {locale === "cy" ? "Bwciwch yn awr" : "Book now"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Event
