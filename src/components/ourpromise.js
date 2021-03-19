import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const OurPromise = ({ promise1, promise2, promise3, promise4 }) => (
  <section className="promiseSection">
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
    />   
  </section>
)

export default OurPromise
