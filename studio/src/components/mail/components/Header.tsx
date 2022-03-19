import React, { FC } from 'react'
import s from '../styles/Mail.module.css'

interface Props {
  data: any
  document: any
}

export const Header: FC<Props> = ({ data, document }) => (
  <table
    className={s.header}
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className={s.headerRowBrand}>
      <td className={s.headerDataBrand}>
        <a href={data.settings.url}>
          {data.newsletter.logo && (
            <img
              src={data.newsletter.logo}
              className={s.brand}
              alt=""
              width="150"
              height="150"
            />
          )}
        </a>
      </td>
    </tr>
    <tr className={s.headerRow}>
      <td className={s.headerData}>{data.company.title}</td>
    </tr>
    <tr className={s.headerRow}>
      <td className={s.divider}></td>
    </tr>
  </table>
)
export default Header
