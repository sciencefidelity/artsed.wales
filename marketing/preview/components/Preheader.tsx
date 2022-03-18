import React, { FC } from "react"

interface Props {
  en: any
}

export const Preheader: FC<Props> = ({en}) => {
  const url = `${en.settings.url}/${en.newsletter._type}/${en.newsletter.slug}`
  return (
    <table
      className="preheader"
      // border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tr className="preheader__row">
        <td className="preheader__data">
          <a href={url}>{en.labels.browser}</a>
        </td>
      </tr>
    </table>
  )
}
export default Preheader
