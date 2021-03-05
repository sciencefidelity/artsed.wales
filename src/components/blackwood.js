import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Blackwood = () => (
  <section
    style={{
      marginBottom: `6rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        border: `8px solid white`,
        width: `85%`,
        marginRight: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <StaticImage
        src="../images/aen_blackwood_2.jpg"
        width={600}
        height={400}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="War and Peace Exhibition at Blackwood Miners Institute"

      />
      <div
        style={{
          width: `38%`,
          padding: `35px 30px 10px 40px`,
          position: `relative`,
        }}
      >
        <blockquote>72 our of 76 of our year sixes had parents visit our exhibition at Blackwood Miners’ Institute, that’s more that we’ve ever had at parents events in the school.<div style={{height: 10}}></div><cite>(Blackwood Primary School)</cite></blockquote>
      </div>
    </div>
  </section>
)

export default Blackwood
