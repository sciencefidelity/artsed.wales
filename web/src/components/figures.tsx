// Figures section with auto countup

import React from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import IllustrationD from "./illustrations/illustrationD"

const Figures = ({ legacy1, legacy2, legacy3, legacy4, legacy5 }) => (
  <section className="legacySection">
    <IllustrationD />
    <div className="legacySmall">
      <small>{legacy1}</small>
    </div>
    <div className="figuresLayout">
      <div>
        <CountUp end={782} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <div className="figure" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h4 className="figureCap">{legacy2}</h4>
      </div>
      <div>
        <CountUp end={2351} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <div className="figure" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h4 className="figureCap">{legacy3}</h4>
      </div>
      <div>
        <CountUp end={302} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <div className="figure" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h4 className="figureCap">{legacy4}</h4>
      </div>
      <div>
        <CountUp end={10895} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <div className="figure" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <h4 className="figureCap">{legacy5}</h4>
      </div>
    </div>
  </section>
)

export default Figures
