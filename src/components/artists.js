import React from "react"

const artistsLayout = {
  width: `50%`,
  paddingRight: 30,
}

const Artists = ({ artists1, artists2, artists3, artists4 }) => (
  <section
    style={{
      marginBottom: `7.8rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
      }}
    >
      <div
        style={
          artistsLayout
        }
      >
        <h2>{artists1}</h2>
        <p>{artists2}</p>
      </div>
        <div
        style={
          artistsLayout
        }
      >
        <h2>{artists3}</h2>
        <p
          style={{
            letterSpacing: `-0.02rem`
          }}
        >{artists4}</p>
      </div>
    </div>
  </section>
)

export default Artists
