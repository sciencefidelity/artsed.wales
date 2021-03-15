import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const briteLink = {
  display: `flex`,
  background: `#0D0D0D`,
  height: `3.5rem`,
  border: 0,
  margin: `2.9rem auto 1.7rem`,
  color: `white`,
  fontSize: `1.8rem`,
  fontFamily: `"Neue Haas Unica",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  fontWeight: `bold`,
  padding: `0.2rem 1.5rem 0.2rem`,
  borderRadius: `0.5rem`,
  boxShadow: `0 0.3rem 0px rgb(156, 158, 158)`,
}

const Courses = ({
  site1, site2, site3, site4, digital1, digital2, digital3, digital4, book
}) => (
  <section
    style={{
      marginBottom: `9rem`,
      display: `flex`
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        border: `8px solid white`,
        width: `46%`,
        marginRight: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <StaticImage
        src="../images/aen_outdoor_2.jpg"
        width={400}
        height={600}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="War and Peace Exhibition at Blackwood Miners Institute"

      />
      <div
        style={{
          width: `100%`,
          padding: `1rem 1.3rem 1rem 1.3rem`,
          position: `relative`,
        }}
      >
        <h2>{site1}</h2>
        <h3
          style={{
            margin: `-0.5rem 0 0.8rem`,
            fontSize: `1.5rem`,
            fontWeight: 400
          }}
        >{site2}</h3>
        <h4
          style={{
            margin: `0.1rem 0`,
            fontSize: `1.2rem`,
            fontWeight: 400
          }}
        >
          {site3}
        </h4>
        <h4
          style={{
            margin: `0rem 0 2rem`,
            fontSize: `1.2rem`,
            fontWeight: 400
          }}
        >
          £65
        </h4>
        <p>{site4}</p>
        <button style={briteLink}>{book}</button>
      </div>
    </div>
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        border: `8px solid white`,
        width: `46%`,
        marginLeft: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <StaticImage
        src="../images/aen_printing.jpg"
        width={400}
        height={600}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="War and Peace Exhibition at Blackwood Miners Institute"
  
      />
      <div
        style={{
          width: `100%`,
          padding: `1rem 1.3rem 1rem 1.3rem`,
          position: `relative`,
        }}
      >
        <h2>{digital1}</h2>
        <h3
          style={{
            margin: `-0.5rem 0 0.8rem`,
            fontSize: `1.5rem`,
            fontWeight: 400
          }}
        >{digital2}</h3>
        <h4
          style={{
            margin: `0.1rem 0`,
            fontSize: `1.2rem`,
            fontWeight: 400
          }}
        >
          {digital3}
        </h4>
        <h4
          style={{
            margin: `0rem 0 2rem`,
            fontSize: `1.2rem`,
            fontWeight: 400
          }}
        >
          £65
        </h4>
        <p>{digital4}</p>
        <button style={briteLink}>{book}</button>
      </div>
    </div>
  </section>
)

export default Courses
