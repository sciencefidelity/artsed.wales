import { FC, Fragment, useState } from "react"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import { Localize } from "components/localize"
import { Quote, Label } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/index.module.scss"

interface Props {
  label: Label
  quotes: Quote[]
}

export const QuoteSection: FC<Props> = ({ label, quotes }) => {
  const [quoteNumber, setQuoteNumber] = useState(0)
  const { locale } = useRouter()
  return (
    <section className={`${s.indexQuotes}`}>
      <article className={`${s.quoteContainer} ${u.grid}`}>
        <img
          src={urlFor(quotes[quoteNumber].image)
            .auto("format")
            .width(600)
            .height(600)
            .quality(100)
            .url()}
          alt={localize(quotes[quoteNumber].organisation, locale)}
          className={`${s.quoteImage}`}
        />
        <blockquote className={`${s.quote}`}>
          {"“"}<Localize data={quotes[quoteNumber].quote} />{"”"}<br />
          <cite className={`${s.cite}`}>
            {quotes[quoteNumber].cite}<br />
            <Localize data={quotes[quoteNumber].organisation} />
          </cite>
        </blockquote>
      </article>
      <nav className={`${u.flex} ${s.quoteBtns}`}>
        {quotes.map((quote, idx) =>
          <Fragment key={quote._key}>
            <button
              onClick={() => setQuoteNumber(idx)}
              className={`
                ${s.quoteBtn}
                ${idx === quoteNumber ? s.quoteBtnActive : null}
              `}
            >
              {" "}&bull;{" "}
              <span className={`${u.screenReaderText}`}>
                <Localize data={label.text} />
              </span>
            </button>
          </Fragment>
        )}
      </nav>
    </section>
  )
}
