import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Network = ({ network1, network2 }) => (
  <section className="networkSection">
    <div className="splitContainer">
      <StaticImage
        src="../images/aen_network.jpg"
        width={600}
        height={400}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        objectPosition={"50% 50%"}
        alt=""
        className="sideImage"
      />
      <div className="splitText">
        <h2>{network1}</h2>
        <p>{network2}</p>
      </div>
    </div>
  </section>
)

export default Network
