import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const artformLayout = {
  width: `33.33%`,
  paddingRight: 30,
}

const Casestudies = () => (
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
          artformLayout
        }
      >
        <h2>Art</h2>
        <p>Artist Sarah Brigland introduced printmaking in response to Cwmbran's built environment. Jubilee Park Primary used the techniques to respond to Newport’s built environment. Finding out that Newport once had a network of trams, the class went to see the play Vehicles.</p>
      </div>
        <div
        style={
          artformLayout
        }
      >
        <h2>Music</h2>
        <p>Over a three-day project, a year-six class created spoken word performances in response to their visit to National Trust Tredegar House with bilingual poet and musician Rufus Mufasa. The class were invited back to the historic house to perform their poems for parents and teachers.</p>
      </div>
      <div
        style={
          artformLayout
        }
      >
        <h2>Theatre</h2>
        <p>Educators from Theatr Iolo developed a workshop about devising theatre in the classroom in response to their play Muckers. Having attended the workshop, several teachers appleed for and received Go and See grants to take their learners to the theatre and experience the play.</p>
      </div>
    </div>
    <div>
      <StaticImage
      src="../images/aen_theatre.jpg"
      width={600}
      height={400}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="War and Peace Exhibition at Blackwood Miners Institute"
      style={{
        display: `flex`,
        width: `65%`,
        border: `8px solid white`,
        marginTop: `6rem`,
        marginLeft: `auto`,
        marginRight: `auto`,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.2)`,
      }}
    />   
    </div>
  </section>
)

export default Casestudies
