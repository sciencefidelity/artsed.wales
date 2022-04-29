import { useRouter } from "next/router"
import Ampersand from "components/ampersand"
import u from "styles/utils.module.scss"
import s from "pages/about.module.scss"

const Model = () => {
  const { locale } = useRouter()
  return (
    <section className={`${s.venn} ${u.mbLarge}`}>
      <div className={`${u.flex} ${u.uppercase}`}>
        <div className={s.vennDiagram}>
          <div className={s.circle1}></div>
          <div className={s.circle2}></div>
          <div className={s.circle3}></div>
          <div className={s.circle4}></div>
          <div className={s.circle5}></div>
          <div className={s.circle6}></div>
          <div className={`${s.content1} ${u.fgDark}`}>
            {locale === "cy" ? "Artistiaid" : "Artists"}
          </div>
          <div className={`${s.content2} ${u.fgDark}`}>
            {locale === "cy" ? "Ysgolion" : "Schools"}
          </div>
          <div className={`${s.content3} ${u.fgDark}`}>
            {locale === "cy" ? "Cyrff " : "Cultural"}
            <br />
            {locale === "cy" ? "Diwylliannol" : "Organisations"}
          </div>
          <div className={`${s.content4} ${u.fgWhite}`}>
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
export default Model
