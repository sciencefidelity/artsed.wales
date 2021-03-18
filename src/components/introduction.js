import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Introduction = ({ introText1, introText2 }) => (
  <section
    style={{
      marginBottom: `3.6rem`,
    }}
  >
    <div 
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`
      }}
    >
    <div 
      style={{
        marginRight: 20,
      }}
    >
      <p
        style={{
          letterSpacing: `-0.02rem`
        }}
      >{introText1}</p>
      <p
        style={{
          letterSpacing: `-0.01rem`
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
      style={{
        border: `8px solid white`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
        marginLeft: 20,
      }}
    />   
  </div>
  </section>
)

export default Introduction
