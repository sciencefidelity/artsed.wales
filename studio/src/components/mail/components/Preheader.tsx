import React, { FC } from "react"
import s from "../styles/Mail.module.css"

interface Props {
  data: any
  document: any
}

export const Preheader: FC<Props> = ({ data, document }) => {
  const url = `
    ${data.settings.url}/
    ${document.displayed._type}/
    ${document.displayed.slug.current}
  `
  return (
    <table
      className={s.preheader}
      // border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tr className={s.preheaderRow}>
        <td className={s.preheaderData}>
          <a href={url}>{data.labels.browser}</a>
        </td>
      </tr>
    </table>
  )
}
export default Preheader
