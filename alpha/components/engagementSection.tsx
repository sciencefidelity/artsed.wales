import { FC, useState } from "react"
import { useRouter } from "next/router"
import { CountUp } from "use-count-up"
import { Waypoint } from "react-waypoint"
import { localize } from "lib/utils"
import { Engagement } from "lib/interfaces"
import Localize from "components/localize"
import u from "styles/utils.module.scss"
import s from "styles/index.module.scss"

interface Props { engagement: Engagement }

export const EngagementSection: FC<Props> = ({ engagement }) => {
  const [isCounting, setIsCounting] = useState(false)
  const { locale } = useRouter()
  const countUpProps = {
    isCounting,
    onComplete: () => setIsCounting(false)
  }

  return (
    <section>
      <article className={`${s.indexEngagement}`}>
        {engagement.intro &&
          <p
            dangerouslySetInnerHTML={{
              __html: localize(engagement.intro, locale)
            }}
          />
        }
      </article>
      <Waypoint onEnter={() => setIsCounting(true)} />
      {engagement.engagementFigure &&
        <div className={`${s.engagement} ${u.grid}`}>
          {engagement.engagementFigure.map(figure =>
            <div className={`${s.engagementFigures}`} key={figure._key}>
              <span className={`${s.number} ${u.mono}`}>
                <CountUp
                  {...countUpProps}
                  end={figure.count}
                  duration={2}
                />
              </span>
              <h3 className={`${u.uppercase} ${s.h3}`}>
                <Localize data={figure.title} />
              </h3>
            </div>
          )}
        </div>
      }
      <Waypoint onEnter={() => setIsCounting(true)} />
    </section>
  )
}
