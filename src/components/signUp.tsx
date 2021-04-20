import React from "react"

import IllustrationI from "./illustrations/illustrationI"

const SignUp = ({ signup1, signup2, signup3 }) => (
  <section className="signupSection">
    <IllustrationI />
    <h2 className="signupHeading">{signup1}</h2>
    <div>
      <form>
      <label>
        <input
          type="text"
          name={signup2}
          placeholder={signup2}
          className="signupInput"
        />
      </label>
      <input 
        type="image"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath d='M285 273L91 467c-9 10-24 10-34 0l-22-22c-10-10-10-25-1-34l155-155L34 101c-9-9-9-24 1-34l22-22c10-10 25-10 34 0l194 194c10 9 10 25 0 34z' fill='%23fff'/%3E%3C/svg%3E"
        alt=""
        style={{
          cursor: `pointer`,
          background: `rgba(77, 73, 73)`,
          border: 0,
          height: `4rem`,
          width: `4rem`,
          padding: `1.2rem`,
          transform: `translateY(1.4rem)`
        }}
      />
    </form>
    </div>
    <div className="signupText">
      <p>{signup3}</p>
    </div>
  </section>
)

export default SignUp
