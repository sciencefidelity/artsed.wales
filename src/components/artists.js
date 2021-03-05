import React from "react"

const artistsLayout = {
  width: `50%`,
  paddingRight: 30,
}

const Artists = () => (
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
        style={
          artistsLayout
        }
      >
        <h2>Artists are Key</h2>
        <p>Practicing contemporary artists and creative people provide an essential connection to the contemporary arts. The degree of honesty and openness with which artists share their practice offers invaluable, memorable insights into the artistic process.</p>
      </div>
        <div
        style={
          artistsLayout
        }
      >
        <h2>Lifelong Creators</h2>
        <p>Museums, galleries and theatres need a new generation of visitors if they are to survive. Opportunities for children is take part in their culture gives them ownership of it. Lifelong creators pass that love of culture on to their children, laying the foundations of cultural democracy.</p>
      </div>
    </div>
  </section>
)

export default Artists
