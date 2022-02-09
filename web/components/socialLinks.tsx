import { FC } from "react"
import { SocialLinksProps } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const SocialLinks: FC<SocialLinksProps> = ({ site }) => {
  return (
    <section className={`${u.center} ${u.w100} ${u.mbMedium}`}>
      <div className={`
        ${u.hide}
        ${u.mdBlock}
        ${u.sans}
        ${u.uppercase}
        ${u.lh2}
        ${u.textCenter}
        ${u.smTextLeft}
      `}>
        Follow us on:{" "}
      </div>
      <ul
        className={`
          ${s.linksMenu}
          ${u.wrap}
          ${u.sans}
          ${u.uppercase}
        `}
      >
        <li className={`${u.mdHide}`}>Follow us on:{" "}</li>
        {site.socialMediaLinks.map(link =>
          <li key={link._id}><a href={link.link}>{link.site}</a></li>
        )}
      </ul>
    </section>
  )
}
export default SocialLinks
