import { FC } from "react"
import { useRouter } from "next/router"
import { localize } from "lib/utils"
import { Settings } from "lib/interfaces"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  settings: Settings
}

const SocialLinks: FC<Props> = ({ settings }) => {
  const { locale } = useRouter()
  console.log(settings)
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
        {settings.social.map(link =>
          <li key={link._key}><a href={localize(link.url, locale)}>{link.name}</a></li>
        )}
      </ul>
    </section>
  )
}
export default SocialLinks
