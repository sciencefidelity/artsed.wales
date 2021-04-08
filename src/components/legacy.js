import React from "react"

import IllustrationD from "./illustrations/illustrationD"

const Legacy = ({ legacy1, legacy2, legacy3, legacy4, legacy5 }) => (
  <section className="legacySection">
    <IllustrationD />
    <div className="legacySmall"><small>{legacy1}</small></div>
    <div className="figuresLayout">
      <div>
        <h3 className="figure">782</h3>
        <h4 className="figureCap">{legacy2}</h4>
      </div>
      <div>
        <h3 className="figure">2351</h3>
        <h4 className="figureCap">{legacy3}</h4>
      </div>
      <div>
        <h3 className="figure">302</h3>
        <h4 className="figureCap">{legacy4}</h4>
      </div>
      <div>
        <h3 className="figure">10895</h3>
        <h4 className="figureCap">{legacy5}</h4>
      </div>
    </div>

  </section>
)

export default Legacy
