import React, { FC } from "react"

interface Props {
  en: any
}

export const Header: FC<Props> = ({en}) => (
  <table
    className="header"
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className="header__row--brand">
      <td className="header__data--brand">
        <a href={en.settings.url}>
          <img
            src={en.newsletter.logo.url}
            className="brand"
            alt="National Arts and Education Network logo"
            width="150"
            height="150"
          />
        </a>
      </td>
    </tr>
    <tr className="header__row">
      <td className="header__data">{en.company.title}</td>
    </tr>
    <tr className="header__row">
      <td className="divider"></td>
    </tr>
  </table>
)
export default Header
