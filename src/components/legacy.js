import React from "react"

const numbersLayout = {
  width: `25%`,
}

const Legacy = ({ legacy1, legacy2, legacy3, legacy4, legacy5 }) => (
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
      <p><small>{legacy1}</small></p>
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
        <h4>{legacy2}</h4>
      </div>
        <div
        style={
          numbersLayout
        }
      >
        <h3>2351</h3>
        <h4>{legacy3}</h4>
      </div>
      <div
        style={
          numbersLayout
        }
      >
        <h3>302</h3>
        <h4>{legacy4}</h4>
      </div>
      <div
      style={
        numbersLayout
        }
      >
        <h3>10895</h3>
        <h4>{legacy5}</h4>
      </div>
    </div>

  </section>
)

export default Legacy
