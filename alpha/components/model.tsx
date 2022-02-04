import { useRouter } from "next/router"
import Ampersand from "components/ampersand"
// import Localize from "components/localize"
import u from "styles/utils.module.scss"
import s from "components/model.module.scss"

const Model = ({ statement }) => {
  const { locale } = useRouter()
  return (
    <section className={u.mbLarge}>
      <div className={`${s.venn} ${u.flex} ${u.uppercase}`}>
        <p className={`${u.container} ${u.mtLarge} ${u.mbLarge} ${u.serif}`}>
{/*           <Localize data={statement.statement} /> */}
        </p>
        <div className={s.vennDiagram}>
          <div className={s.circle1}></div>
          <div className={s.circle2}></div>
          <div className={s.circle3}></div>
          <div className={s.circle4}></div>
          <div className={s.circle5}></div>
          <div className={s.circle6}></div>
          <div
            className={`${s.content1} ${u.fgDark}`}
            style={{ fontSize: "2.5rem" }}
          >{locale === "cy" ? "Artistiaid" : "Artists"}</div>
          <div
            className={`${s.content2} ${u.fgDark}`}
            style={{ fontSize: "2.5rem" }}
          >{locale === "cy" ? "Ysgolion" : "Schools"}</div>
          <div
            className={`${s.content3} ${u.fgDark}`}
            style={{ fontSize: "2.5rem" }}
          >
            {locale === "cy" ? "Celfyddydol" : "Cultural"}
            <br />
            {locale === "cy" ? "Sefydliadau" : "Organisations"}
          </div>
          <div className={s.content4} style={{ fontSize: "2.5rem" }}>
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
