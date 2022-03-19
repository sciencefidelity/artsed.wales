import React, { FC } from 'react'
import s from '../styles/Mail.module.css'
import { urlFor } from '../../../lib/utils'

interface Props {
  document: any
}

export const Headline: FC<Props> = ({ document }) => (
  <table
    className={s.headline}
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className={s.headlineRow}>
      <td className={s.headlineData}>
        {document.displayed.headline && <h1>{document.displayed.headline}</h1>}
      </td>
    </tr>
    <tr className={s.headlineRowImage}>
      <th className={s.headlineDataImage}>
        <img
          src={urlFor(document.displayed.mainImage)
            .auto('format')
            .width(600)
            .height(400)
            .quality(80)
            .url()}
          className={s.imageFullwidth}
          alt={document.displayed.title}
          width="600"
          height="400"
        />
      </th>
    </tr>
  </table>
)
export default Headline
