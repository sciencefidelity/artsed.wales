import React, { FC } from "react"
import PortableText from "components/PortableText"
import { components } from "components/PortableTextComponents"

interface Props {
  en: any
}

export const Body: FC<Props> = ({en}) => (
  <table
    className="body"
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className="body__row">
      <td className="body__data">
        <PortableText
          value={en.newsletter.body}
          components={components}
          />
      </td>
    </tr>
    <tr className="header__row">
      <td className="divider"></td>
    </tr>
  </table>
)
export default Body
