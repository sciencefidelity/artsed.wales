import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Introduction = () => (
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
      <p>We advocate a national programme that partners schools with cultural organisations; Expressive Arts learning led by and in partnership with the arts sector. Our long term goal is to build national policy for collaboration between our schools and arts sector that will be the first of its kind anywhere in the world.</p>
      <p>Quality arts experiences in childhood are life changing, building the foundation for lifelong arts appreciation and participation. Meaningful cultural experiences outside the classroom are essential in the delivery of the statements of what matters in the Expressive Arts AoLE and the Four Purposes of the Curriculum for Wales.</p>
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
        height={600}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="War and Peace Exhibition at Blackwood Miners Institute"
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
