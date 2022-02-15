import React, { FC } from "react"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import Localize from "components/localize"
import { EngagementProps } from "lib/interfaces"
import s from "pages/index.module.scss"
import u from "styles/utils.module.scss"

const Engagement: FC<EngagementProps> = ({ site, statement }) => {
  const { locale } = useRouter()
  return (
    <section className={u.mbLarge}>
      <div className={`${s.engagementText} ${u.center}`}>
        {statement.statement &&
          <PortableText
            value={locale === "cy" && statement.statement.cy
              ? statement.statement.cy
              : statement.statement.en}
            components={components}
          />
        }
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

