import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const artformLayout = {
  width: `33.33%`,
  paddingRight: 30,
}

const Casestudies = ({ art1, art2, music1, music2, theatre1, theatre2 }) => (
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
        style={
          artformLayout
        }
      >
        <h2>{art1}</h2>
        <p>{art2}</p>
      </div>
        <div
        style={
          artformLayout
        }
      >
        <h2>{music1}</h2>
        <p>{music2}</p>
      </div>
      <div
        style={
          artformLayout
        }
      >
        <h2>{theatre1}</h2>
        <p>{theatre2}</p>
      </div>
    </div>
    <div>
      <StaticImage
      src="../images/aen_theatre.jpg"
      width={600}
      height={400}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="War and Peace Exhibition at Blackwood Miners Institute"
      style={{
        display: `flex`,
        width: `65%`,
        border: `8px solid white`,
        marginTop: `6rem`,
        marginLeft: `auto`,
        marginRight: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    />   
    </div>
  </section>
)

export default Casestudies
