import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Network = () => (
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
      <h2>A National Network</h2>
      <p>We are a national network of teachers, artists and cultural organisations providing assistance to Welsh schools to meet their aims for the Expressive Arts Area of Learning Experience by providing them with partnerships to the Welsh cultural sector. We champion networking, colaboration, and actively build proffessional supportive networks between schools and the arts sector throughout Wales. Together we can build amazing things!</p>
    </div>
  </div>
  </section>
)

export default Network
