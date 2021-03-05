import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Tredegar = () => (
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
        marginLeft: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <StaticImage
        src="../images/aen_tredegar.jpg"
        width={400}
        height={300}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Spoken word perfrmance at Tredegar House"

      />
      <div
        style={{
          width: `50%`,
          padding: `25px 30px 10px 40px`,
          position: `relative`,
        }}
      >
        <blockquote>This amazing spoken-word project has inspired our learners to fire their imagination and express themselves. Spoken Word has strengthened the school’s relationship with outside agencies in our community to support future literacy projects in the new curriculum framework.<div style={{height: 10}}></div><cite>(Nicola Williams, Tredegar Park Primary School)</cite></blockquote>
      </div>
    </div>
  </section>
)

export default Tredegar
