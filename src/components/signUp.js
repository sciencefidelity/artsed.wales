import React from "react"

const SignUp = ({ signup1, signup2, signup3 }) => (
  <section
    style={{
      marginBottom: `6rem`,
      textAlign: `center`
    }}
  >
    <h2
      style={{
        textAlign: `center`,
        marginBottom: `0.4rem`,
      }}
    >{signup1}</h2>
    <div>
      <form>
      <label>
        <input
          type="text"
          name={signup2}
          placeholder={signup2}
          style={{
            background: `white`,
            border: `0`,
            width: `57%`,
            padding: `0.85rem 1.5rem`,
            fontFamily: `"Neue Haas Unica", sans-serif`,
            fontSize: `1.55rem`
          }}
        />
      </label>
      <input 
        type="image"
        src="data:image/svg+xml;utf8,&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 320 512&quot;&gt;&lt;path fill=&quot;white&quot; d=&quot;M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;"
        name="subscribe"
        id="mc-embedded-subscribe"
        class="button"
        alt={signup2}
        style={{
          cursor: `pointer`,
          background: `rgba(13, 13, 13, 0.7)`,
          border: `0`,
          height: `4rem`,
          width: `4rem`,
          padding: `1.2rem`,
          transform: `translateY(1.4rem)`
        }}
      />
    </form>
    </div>
    <div
      style={{
        textAlign: `left`,
        width: `50%`,
        margin: `auto`,
      }}
    >
      <p>
        {signup3}
      </p>
    </div>
  </section>
)
  
  export default SignUp
  