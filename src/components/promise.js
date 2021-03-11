import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const promiseLayout = {
  width: `33.33%`,
  paddingRight: 30,
}

const Promise = () => (
  <section
    style={{
      marginBottom: `8rem`,
    }}
  >
    <h2>Our Promise</h2>
    <div
      style={{
        display: `flex`,
      }}
    >
      <div
        style={
          promiseLayout
        }
      >
        <p>Wales has two languages. We promise to provide high quality training and resources in both of Wales’s national languages, and always be responsive to the individual language requirements of every part of Wales.</p>
      </div>
        <div
        style={
          promiseLayout
        }
      >
        <p>Wales is a varied country. We promise to provide a robust programme of professional development nationally standardised in quality, while responding to the Wales's unique identity and cultural diversity.</p>
      </div>
      <div
        style={
          promiseLayout
        }
      >
        <p>The contemporary arts in Wales are exciting. We promise to be responsive to current cultural developments and inspire teachers to enrich their teaching with to cutting-edge art practices and techniques.</p>
      </div>
    </div>
    <div>
      <StaticImage
      src="../images/aen_outdoor_1.jpg"
      width={600}
      height={400}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Site-Specific Arts at Bedwellty House"
      style={{
        display: `flex`,
        width: `65%`,
        border: `8px solid white`,
        marginTop: `4rem`,
        marginLeft: `auto`,
        marginRight: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    />   
    </div>
  </section>
)

export default Promise
