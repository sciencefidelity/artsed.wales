import { FC } from "react"
import { SocialLinksProps } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const SocialLinks: FC<SocialLinksProps> = ({ site }) => {
  return (
    <section className={`${u.center} ${u.w100} ${u.mbMedium}`}>
      <ul
        className={`
          ${s.linksMenu}
          ${u.flex}
          ${u.wrap}
          ${u.sans}
          ${u.uppercase}
          ${u.gapSmall}
        `}
      >
        <li>Follow us on:{" "}</li>
        {site.socialMediaLinks.map(link =>
          <li key={link._id}><a href={link.link}>{link.site}</a></li>
        )}
      </ul>
    </section>
  )
}
export default SocialLinks
