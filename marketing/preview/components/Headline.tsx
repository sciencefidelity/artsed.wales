import React, { FC } from "react"
import { urlFor } from "lib/utils"
import s from "styles/Mail.module.css"

interface Props {
  en: any
}

export const Headline: FC<Props> = ({en}) => (
  <table
    className={s.headline}
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className={s.headlineRow}>
      <td className={s.headlineData}>
        <h1>{en.newsletter.headline}</h1>
      </td>
    </tr>
    <tr className={s.headlineRowImage}>
      <th className={s.headlineDataImage}>
        <img
          src={urlFor(en.newsletter.mainImage)
            .auto("format")
            .width(600)
            .height(400)
            .quality(80)
            .url()}
          className={s.imageFullwidth}
          alt={en.newsletter.title}
          width="600"
          height="400"
        />
      </th>
    </tr>
  </table>
)
export default Headline
