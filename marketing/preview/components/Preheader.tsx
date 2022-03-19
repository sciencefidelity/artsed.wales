import React, { FC } from "react"
import s from "styles/Mail.module.css"

interface Props {
  en: any
}

export const Preheader: FC<Props> = ({en}) => {
  const url = `${en.settings.url}/${en.newsletter._type}/${en.newsletter.slug}`
  return (
    <table
      className={s.preheader}
      // border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tr className={s.preheaderRow}>
        <td className={s.preheaderData}>
          <a href={url}>{en.labels.browser}</a>
        </td>
      </tr>
    </table>
  )
}
export default Preheader
