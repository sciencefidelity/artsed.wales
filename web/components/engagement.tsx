import { FC } from "react"
import Localize from "components/localize"
import Markdown from "components/markdown"
import u from "styles/utils.module.scss"
import { EngagementProps } from "lib/interfaces"

const Engagement: FC<EngagementProps> = ({ site, statement }) => {
  return (
    <section>
      <div
        className={u.center}
        style={{ width: "60%", marginBottom: "7rem" }}
      >
        <Markdown content={statement.statement} />
      </div>
      <div
        className={`${u.grid} ${u.mbLarge}`}
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2rem" }}
      >
      {site.engagementFigures.map(figure =>
        <div
          className={`${u.center} ${u.w100} ${u.flex} ${u.column}`}
          style={{ placeItems: "center" }}
          key={figure._id}
        >
          <div className={`${u.sans} ${u.sans}`} style={{ fontSize: "8rem" }}>
            {figure.count}
          </div>
          <div
            className={`${u.sans} ${u.uppercase}`}
            style={{ fontSize: "1.8rem" }}
          >
            <Localize data={figure.heading} />
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
export default Engagement
