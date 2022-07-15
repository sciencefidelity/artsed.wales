import { useState } from "react"
import { useRouter } from "next/router"
import { CountUp } from "use-count-up"
import { Waypoint } from "react-waypoint"
import { localize } from "lib/utils"
import { Engagement } from "lib/interfaces"
import { Localize } from "components/localize"
import u from "styles/utils.module.scss"
import s from "styles/index.module.scss"

interface Props {
  engagement: Engagement
}

/**
 * Displays a countup animation when the user scrolls to the bottom of the page
 * @remarks populated by the engagement data
 * @param engagemant - the engagement data defined as {@link Engagement}
 * @returns The JSX Code for the engagement section
 */
export function EngagementSection({ engagement }: Props) {
  const [isCounting, setIsCounting] = useState(false)
  const { locale } = useRouter()
  const countUpProps = {
    isCounting,
    onComplete: () => setIsCounting(false),
  }

  return (
    <section>
      <article className={`${s.indexEngagement}`}>
        {engagement.intro && locale && (
          <p
            // TODO: make this less dangerous
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: localize(engagement.intro, locale),
            }}
          />
        )}
      </article>
      <Waypoint onEnter={() => setIsCounting(true)} />
      {engagement.engagementFigure && (
        <div className={`${s.engagement} ${u.grid}`}>
          {engagement.engagementFigure.map((figure) => (
            <div className={`${s.engagementFigures}`} key={figure._key}>
              <span className={`${s.number} ${u.mono}`}>
                <CountUp {...countUpProps} end={figure.count} duration={2} />
              </span>
              <h3 className={`${u.uppercase} ${s.h3}`}>
                <Localize data={figure.title} />
              </h3>
            </div>
          ))}
        </div>
      )}
      <Waypoint onEnter={() => setIsCounting(true)} />
    </section>
  )
}
