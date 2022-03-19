import React, { FC } from "react"
import s from "styles/Mail.module.css"

interface Props {
  en: any
}

const year = new Date().getFullYear()

const Footer: FC<Props> = ({ en }) => {
  return (
    <table
      className={s.footer}
      // border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tr className={s.footerRowSocial}>
        <td className={s.footerDataSocial}>
          {en.newsletter.social.map(link =>(
            <a href={link.url} key={link._key}>
              <img
                src={link.icon}
                className={s.imageSocial}
                alt={link.name}
                width="48"
                height="48"
              />
            </a>
          ))}
        </td>
      </tr>
      <tr className={s.footerRow}>
        <td className={s.footerData}>
          <p>&copy;{" "}{year}{" "}{en.company.title}</p>
          <p>
            {en.company.address.line1}{" "}&bull;{" "}
            {en.company.address.line2}{" "}&bull;{" "}
            {en.company.address.city}{" "}&bull;{" "}
            {en.company.address.postcode}
          </p>
          <p>{en.labels.change}<br />
            <a href="*|UNSUB|*">{en.labels.unsubscribe}.</a>
          </p>
        </td>
      </tr>
    </table>
  )
}
export default Footer
