import React, { FC } from 'react'
import PortableText from '../components/PortableText'
import { components } from '../components/PortableTextComponents'
import s from '../styles/Mail.module.css'

interface Props {
  document: any
}

export const Body: FC<Props> = ({ document }) => (
  <table
    className={s.body}
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className={s.bodyRow}>
      <td className={s.bodyData}>
        <PortableText value={document.displayed.body} components={components} />
      </td>
    </tr>
    <tr className={s.headerRow}>
      <td className={s.divider}></td>
    </tr>
  </table>
)
export default Body
