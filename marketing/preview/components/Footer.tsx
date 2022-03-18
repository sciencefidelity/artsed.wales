import React, { FC } from "react"
const year = new Date().getFullYear()

interface Props {
  en: any
}

const Footer: FC<Props> = ({ en }) => {
  console.log("en")
  return (
    <table
      className="footer"
      // border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tr className="footer__row--social">
        <td className="footer__data--social">
          {en.newsletter.social.map(link =>(
            <a href={link.url} key={link._key}>
              <img
                src={link.icon}
                className="image__social"
                alt={link.name}
                width="48"
                height="48"
              />
            </a>
          ))}
        </td>
      </tr>
      <tr className="footer__row">
        <td className="footer__data">
          <p>&copy;{" "}{year}{" "}{en.company.title}</p>
          <p>
            {en.company.address.line1}{" "}&bull;{" "}
            {en.company.address.line2}{" "}&bull;{" "}
            {en.company.address.city}{" "}&bull;{" "}
            {en.company.address.postcode}
          </p>
          <p>{en.labels.change}<br />{en.labels.unsubscribe}.</p>
        </td>
      </tr>
    </table>
  )
}
export default Footer
