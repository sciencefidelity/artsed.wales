import React from "react"

const Artists = ({ artists1, artists2, artists3, artists4 }) => (
  <>
    <section className="artistsSection">
      <div className="halfLayout">
        <div>
          <h2>{artists1}</h2>
          <p>{artists2}</p>
        </div>
        <div>
          <h2>{artists3}</h2>
          <p
            style={{
              letterSpacing: "-0.02rem" // remove for English
            }}
          >
            {artists4}
          </p>
        </div>
      </div>
    </section>
  </>
)

export default Artists
