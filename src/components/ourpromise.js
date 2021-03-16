import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const promiseLayout = {
  width: `33.33%`,
  paddingRight: 30,
}

const OurPromise = ({ promise1, promise2, promise3, promise4 }) => (
  <section
    style={{
      marginBottom: `7.8rem`,
    }}
  >
    <h2>{promise1}</h2>
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
        <p>{promise2}</p>
      </div>
        <div
        style={
          promiseLayout
        }
      >
        <p>{promise3}</p>
      </div>
      <div
        style={
          promiseLayout
        }
      >
        <p>{promise4}</p>
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
        marginTop: `3.7rem`,
        marginLeft: `auto`,
        marginRight: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    />   
    </div>
  </section>
)

export default OurPromise
