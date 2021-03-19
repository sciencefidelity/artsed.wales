import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Introduction = ({ introText1, introText2 }) => (
  <section className="introSection">
    <div className="splitContainer">
      <div className="splitText">
        <p
          style={{
            letterSpacing: `-0.02rem` // remove for English
          }}
        >{introText1}</p>
        <p
          style={{
            letterSpacing: `-0.01rem` // remove for English
          }}
        >{introText2}</p>
      </div>
      <StaticImage
        src="../images/aen_blackwood_1.jpg"
        width={600}
        height={400}
        quality={80}
        objectPosition={"50% 50%"}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt=""
        className="sideImage"
      />   
    </div>
  </section>
)

export default Introduction
