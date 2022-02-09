import { FC } from "react"
import Localize from "components/localize"
import Markdown from "components/markdown"
import { EngagementProps } from "lib/interfaces"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

const Engagement: FC<EngagementProps> = ({ site, statement }) => {
  return (
    <section className={u.mbLarge}>
      <div className={`${s.engagementText} ${u.center}`}>
        <Markdown content={statement.statement} />
      </div>
      <div
        className={`${s.engagement} ${u.grid} ${u.mbLarge}`}
      >
      {site.engagementFigures.map(figure =>
        <div
          key={figure._id}
          className={`${u.textCenter} ${u.w100} ${u.flex} ${u.column}`}
        >
          <div className={`${s.engagementFigure} ${u.sans} ${u.sans}`}>
            {figure.count}
          </div>
          <div className={`${s.engagementTitle} ${u.sans} ${u.uppercase}`}>
            <Localize data={figure.heading} />
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
export default Engagement
