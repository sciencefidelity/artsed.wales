import { FC } from "react"
import { useRouter } from "next/router"
import { localize } from "lib/utils"
import { SocialLinksProps } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const SocialLinks: FC<SocialLinksProps> = ({ site }) => {
  const { locale } = useRouter()
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
        {locale === "cy" ? "Dilynwch ni ar" : "Follow us on"}{": "}
      </div>
      <ul
        className={`
          ${s.linksMenu}
          ${u.wrap}
          ${u.sans}
          ${u.uppercase}
        `}
      >
        <li className={`${u.mdHide}`}>{locale === "cy" ? "Dilynwch ni ar" : "Follow us on"}{": "}</li>
        {site.socialMediaLinks.map(link =>
          <li key={link._id}><a href={localize(link.link, locale)}>{link.site}</a></li>
        )}
      </ul>
    </section>
  )
}
export default SocialLinks
