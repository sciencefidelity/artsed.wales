import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import IllustrationC from "./illustrations/illustrationC"

const Casestudies = ({ art1, art2, music1, music2, theatre1, theatre2 }) => (
  <>
    <section
      style={{
        marginBottom: `6rem`,
      }}
    >
    <IllustrationC />
      <div className="thirdsLayout">
        <div>
          <h2>{art1}</h2>
          <p>{art2}</p>
        </div>
        <div>
          <h2>{music1}</h2>
          <p>{music2}</p>
        </div>
        <div>
          <h2>{theatre1}</h2>
          <p>{theatre2}</p>
        </div>
      </div>
      <StaticImage
        src="../images/aen_theatre.jpg"
        width={600}
        height={400}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt=""
        className="centeredImage"
        style={{display: `block`}}
      />
    </section>
  </>
)

export default Casestudies
