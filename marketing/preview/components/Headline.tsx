import React, { FC } from "react"
import { urlFor } from "../lib/utils"

interface Props {
  en: any
}

export const Headline: FC<Props> = ({en}) => (
  <table
    className="headline"
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className="headline__row">
      <td className="headline__data">
        <h1>{en.newsletter.headline}</h1>
      </td>
    </tr>
    <tr className="headline__row--image">
      <th className="headline__data--image">
        <a href="#">
          <img
            src={urlFor(en.newsletter.mainImage)
              .auto("format")
              .width(600)
              .height(400)
              .quality(80)
              .url()}
            className="image__fullwidth"
            alt="Expressive arts for wellbeing (Key Stage 2)"
            width="600"
            height="400"
          />
        </a>
      </th>
    </tr>
  </table>
)
export default Headline
