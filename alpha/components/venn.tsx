import { useRouter } from "next/router"
import { Ampersand } from "components/icons/ampersand"
import u from "styles/utils.module.scss"
import s from "styles/about.module.scss"

export function Venn() {
  const { locale } = useRouter()
  return (
    <section className={`${s.venn}`}>
      <div className={`${u.flex} ${u.justifyCenter}`}>
        <div className={s.vennDiagram}>
          <div className={s.circle1} />
          <div className={s.circle2} />
          <div className={s.circle3} />
          <div className={s.circle4} />
          <div className={s.circle5} />
          <div className={s.circle6} />
          <div className={`${s.content1}`}>
            {locale === "cy" ? "Artistiaid" : "Artists"}
          </div>
          <div className={`${s.content2}`}>
            {locale === "cy" ? "Ysgolion" : "Schools"}
          </div>
          <div className={`${s.content3}`}>
            {locale === "cy" ? "Cyrff " : "Cultural"}
            <br />
            {locale === "cy" ? "Diwylliannol" : "Organisations"}
          </div>
          <div className={`${s.content4}`}>
            {locale === "cy" ? "Rhwydwaith" : "Network"}
          </div>
          <div>
            <Ampersand />
          </div>
        </div>
      </div>
    </section>
  )
}
