import React from "react"

const numbersLayout = {
  width: `25%`,
}

const Legacy = () => (
  <section
    style={{
      marginBottom: `6rem`,
    }}
  >
    <div
      style={{
        marginBottom: 15,
        textAlign: `center`,
      }}
    >
      <p><small>Legacy of the regional Arts and Education Networks.</small></p>
    </div>
    <div
      style={{
        display: `flex`,
      }}
    >
      <div
        style={
          numbersLayout
        }
      >
        <h3>782</h3>
        <h4>School Engagement</h4>
      </div>
        <div
        style={
          numbersLayout
        }
      >
        <h3>2351</h3>
        <h4>Teacher Participation</h4>
      </div>
      <div
        style={
          numbersLayout
        }
      >
        <h3>302</h3>
        <h4>Sessions Delivered</h4>
      </div>
      <div
      style={
        numbersLayout
        }
      >
        <h3>10895</h3>
        <h4>Digital Community</h4>
      </div>
    </div>

  </section>
)

export default Legacy
