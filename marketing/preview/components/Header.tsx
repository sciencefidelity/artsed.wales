import React, { FC } from "react"
import s from "styles/Mail.module.css"

interface Props {
  en: any
}

export const Header: FC<Props> = ({en}) => (
  <table
    className={s.header}
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className={s.headerRowBrand}>
      <td className={s.headerDataBrand}>
        <a href={en.settings.url}>
          <img
            src={en.newsletter.logo}
            className={s.brand}
            alt={en.company.title}
            width="150"
            height="150"
          />
        </a>
      </td>
    </tr>
    <tr className={s.headerRow}>
      <td className={s.headerData}>{en.company.title}</td>
    </tr>
    <tr className={s.headerRow}>
      <td className={s.divider}></td>
    </tr>
  </table>
)
export default Header
