import Localize from "components/localize"
import u from "styles/utils.module.scss"
import s from "components/model.module.scss"

const Model = ({ statement }) => {
  return (
    <section className={u.mbLarge}>
      <div className={`${s.venn} ${u.flex} ${u.uppercase}`}>
        <p className={`${u.container} ${u.mtLarge} ${u.mbLarge} ${u.serif}`}>
          <Localize data={statement.statement} />
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
          >Schools</div>
          <div
            className={`${s.content2} ${u.fgDark}`}
            style={{ fontSize: "2.5rem" }}
          >Artists</div>
          <div
            className={`${s.content3} ${u.fgDark}`}
            style={{ fontSize: "2.5rem" }}
          >
            Cultural
            <br />
            Organisations
          </div>
          <div className={s.content4} style={{ fontSize: "2.5rem" }}>Network</div>

          <div>
{/*             <Ampersand name="ampersand" width="89"
            height="100" className="ampersand absolute fg-white" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Model
