import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Network = ({ network1, network2 }) => (
  <section
    style={{
      marginBottom: `6.2rem`,
    }}
  >
    <div 
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`
      }}
    >
      <StaticImage
        src="../images/aen_network.jpg"
        width={600}
        height={400}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        objectPosition={"50% 50%"}
        alt=""
        style={{
          border: `8px solid white`,
          boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
          marginRight: 20,
        }}
      />
    <div
      style={{
        marginLeft: 20,
      }}
    >  
      <h2>{network1}</h2>
      <p>{network2}</p>
    </div>
  </div>
  </section>
)

export default Network
