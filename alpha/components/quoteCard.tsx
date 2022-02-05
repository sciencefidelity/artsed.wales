import u from "styles/utils.module.scss"
import s from "components/quoteCard.module.scss"

const QuoteCard = () => {
  return (
    <section className={`${s.quote} ${u.mbLarge}`}>
      <div
        className={`${s.quoteContainer} ${u.flex} ${u.border} ${u.shadow}`}
      >
        <img
          src={image}
          width={width}
          height={height}
          alt="Spoken Word at Tredegar House"
          className={`${s.img} ${u.cover} ${u.ofHidden}`}
          decoding="async"
          loading="lazy"
        />
        <div
          className={`${s.quoteText} ${u.relative} ${u.cardPadding} ${u.bgLight}`}
        >
          <img
            alt="Quote Left"
            src={quoteLeft}
            className={`${s.quoteLeft} ${u.absolute}`}
          />
          <img
            alt="Quote Right"
            src={quoteRight}
            className={`${s.quoteRight} ${u.absolute}`}
          />
{/*           <Icon
            name="quoteLeft"
            width="100"
            height="73"
            className="quoteLeft absolute fgWhite"
          />
          <Icon
           name="quoteRight"
           width="100"
           height="73"
           className="quoteRight absolute fgWhite"
          /> */}
          <blockquote>
            {quote}
            <div className={u.lineSpacer}></div>
            <cite>{cite}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
export default QuoteCard
