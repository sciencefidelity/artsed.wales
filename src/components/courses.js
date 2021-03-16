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
  cursor: `pointer`
}

const Courses = ({
  site1, site2a, site2b, site2c, site3, site4, book,
  digital1, digital2a, digital2b, digital2c, digital3, digital4
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
        <h2
          style={{
            letterSpacing: `-0.01rem`,
          }}
        >{site1}</h2>
        <h3
          style={{
            margin: `0 0 0.8rem`,
            fontSize: `1.5rem`,
            fontWeight: 400
          }}
        >{site2a}<sup>{site2b}</sup> {site2c}</h3>
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
            margin: `0.4rem 0 2rem`,
            fontSize: `1.2rem`,
            fontWeight: 400
          }}
        >
          £65
        </h4>
        <p>{site4}</p>
        <a 
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <button style={briteLink}>{book}</button>
        </a>
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
            margin: `0 0 0.8rem`,
            fontSize: `1.5rem`,
            fontWeight: 400
          }}
        >{digital2a}<sup>{digital2b}</sup> {digital2c}</h3>
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
            margin: `0.4rem 0 2rem`,
            fontSize: `1.2rem`,
            fontWeight: 400
          }}
        >
          £65
        </h4>
        <p
          style={{
            letterSpacing: `-0.01rem`
          }}
        >{digital4}</p>
        <a 
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <button style={briteLink}>{book}</button>
        </a>
      </div>
    </div>
  </section>
)

export default Courses
