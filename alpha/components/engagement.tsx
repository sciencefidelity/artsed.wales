import { FC } from "react"
import Localize from "components/localize"
import Markdown from "components/markdown"
import u from "styles/utils.module.scss"
import { EngagementProps } from "lib/interfaces"

const Engagement: FC<EngagementProps> = ({ site, statement }) => {
  return (
    <section>
      <p
        className={u.center}
        style={{ width: "60%", marginBottom: "7rem" }}
      >
        <Markdown content={statement.statement} />
      </p>
      <div
        className={`${u.grid} ${u.mbLarge}`}
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2rem" }}
      >
      {site.engagement.map(figure =>
        <div
          className={`${u.center} ${u.w100} ${u.flex} ${u.column}`}
          style={{ placeItems: "center" }}
        >
          <div className={`${u.center}`} style={{ fontSize: "8rem" }}>
            {figure.count}
          </div>
          <div className={`${u.sans} ${u.uppercase}`}>
            <Localize data={figure.heading} />
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
export default Engagement
