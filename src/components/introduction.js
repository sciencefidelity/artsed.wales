import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Introduction = ({ introText1, introText2 }) => (
  <section
    style={{
      marginBottom: `6rem`,
    }}
  >
    <div 
      style={{
        display: `flex`,
      }}
    >
    <div 
      style={{
        width: `50%`,
        marginRight: 20,
      }}
    >
      <p>{introText1}</p>
      <p>{introText2}</p>
    </div>
    <div
      style={{
        width: `50%`,
        marginLeft: 20,
      }}
    >  
      <StaticImage
        src="../images/aen_blackwood_1.jpg"
        width={700}
        height={650}
        quality={80}
        objectPosition={"100% 50%"}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt=""
        style={{
          border: `8px solid white`,
          boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
        }}
      />   
    </div>
  </div>
  </section>
)

export default Introduction
