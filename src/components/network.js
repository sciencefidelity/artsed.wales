import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Network = ({ network1, network2 }) => (
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
      <StaticImage
        src="../images/aen_network.jpg"
        width={700}
        height={600}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Networking event at the Riverfront"
        style={{
          border: `8px solid white`,
          boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
        }}
      />
    </div>
    <div
      style={{
        width: `50%`,
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
