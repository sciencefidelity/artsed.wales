import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as courseStyles from "../css/course.module.css"

const Courses = ({
  site1, site2a, site2b, site2c, site3, site4, book,
  digital1, digital2a, digital2b, digital2c, digital3, digital4
}) => (
  <section className={courseStyles.coursesContainer}>
    <div 
      className={courseStyles.cardContainer}
      style={{
        marginRight: `8%`,
      }}
    >
      <StaticImage
        src="../images/aen_outdoor_2.jpg"
        width={400}
        height={600}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt=""
      />
      <div className={courseStyles.cardText}>
        <h2
          style={{
            letterSpacing: `-0.01rem`, // remove for English text
          }}
        >{site1}</h2>
        <h3 
          className={courseStyles.courseDate}
        >{site2a}<sup>{site2b}</sup> {site2c}</h3>
        <h4
          className={courseStyles.courseLocation}
        >{site3}</h4>
        <h4
          className={courseStyles.coursePrice}
        >£65</h4>
        <p>{site4}</p>
        <a 
          href="https://eventbrite.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button className={courseStyles.britelink}>{book}</button>
        </a>
      </div>
    </div>
    <div 
      className={courseStyles.cardContainer}
      style={{
        marginLeft: `8%`,
      }}
    >
      <StaticImage
        src="../images/aen_printing.jpg"
        width={400}
        height={600}
        quality={80}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt=""
      />
      <div className={courseStyles.cardText}>
        <h2>{digital1}</h2>
        <h3 
          className={courseStyles.courseDate}
        >{digital2a}<sup>{digital2b}</sup> {digital2c}</h3>
        <h4
          className={courseStyles.courseLocation}
        >{digital3}</h4>
        <h4
          className={courseStyles.coursePrice}
        >£65</h4>
        <p
          style={{
            letterSpacing: `-0.01rem` // remove for English text
          }}
        >{digital4}</p>
        <a 
          href="https://eventbrite.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button 
            className={courseStyles.britelink}
          >{book}</button>
        </a>
      </div>
    </div>
  </section>
)

export default Courses
