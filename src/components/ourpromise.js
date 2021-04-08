import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import IllustrationH from "./illustrations/illustrationH"

const OurPromise = ({ promise1, promise2, promise3, promise4 }) => (
  <section className="promiseSection">
    <IllustrationH />
    <h2 className="promiseTitle">{promise1}</h2>
    <div className="thirdsLayout">
      <p>{promise2}</p>
      <p>{promise3}</p>
      <p>{promise4}</p>
    </div>
    <StaticImage
      src="../images/aen_outdoor_1.jpg"
      width={600}
      height={400}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt=""
      className="centeredImage"
      style={{display: `block`}}
    />   
  </section>
)

export default OurPromise
