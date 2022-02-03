import Image from "next/image"
import "../scss/course.scss"

const Courses = () => (
  <section className="coursesContainer">
    <div className="cardContainer">
      <Image
        src="../images/aen_outdoor_2.jpg"
        width={400}
        height={600}
        quality={80}
        objectPosition={"50% 10%"}
        alt=""
        className="cardImage"
      />
      <div className="cardText">
        <h2
          style={{
            letterSpacing: "-0.01rem" // remove for English text
          }}
        >
          {site1}
        </h2>
        <h3 className="courseDate">
          {site2a}
          <sup>{site2b}</sup> {site2c}
        </h3>
        <h4 className="courseLocation">{site3}</h4>
        <h4 className="coursePrice">£65</h4>
        <p>{site4}</p>
        <a href="https://eventbrite.com/" target="_blank" rel="noreferrer">
          <button className="britelink">{book}</button>
        </a>
      </div>
    </div>
    <div className="cardContainer">
      <Image
        src="../images/aen_printing.jpg"
        width={400}
        height={600}
        quality={80}
        objectPosition={"50% 10%"}
        alt=""
        className="cardImage"
      />
      <div className="cardText">
        <h2>{digital1}</h2>
        <h3 className="courseDate">
          {digital2a}
          <sup>{digital2b}</sup> {digital2c}
        </h3>
        <h4 className="courseLocation">{digital3}</h4>
        <h4 className="coursePrice">£65</h4>
        <p
          style={{
            letterSpacing: "-0.01rem" // remove for English text
          }}
        >
          {digital4}
        </p>
        <a href="https://eventbrite.com/" target="_blank" rel="noreferrer">
          <button className="britelink">{book}</button>
        </a>
      </div>
    </div>
  </section>
)

export default Courses
