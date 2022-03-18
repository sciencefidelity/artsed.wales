import React, { FC } from "react"

interface Props {
  en: any
}

export const Preheader: FC<Props> = ({en}) => (
  <table
    className="preheader"
    // border="0"
    cellPadding="0"
    cellSpacing="0"
  >
    <tr className="preheader__row">
      <td className="preheader__data">
        <a href="#">{en.labels.browser}</a>
      </td>
    </tr>
  </table>
)
export default Preheader
