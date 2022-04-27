import { FC } from "react"
import { useRouter } from "next/router"
import { Settings } from "lib/interfaces"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  settings: Settings
}

const SocialLinks: FC<Props> = ({ settings }) => {
  const { locale } = useRouter()
  return (
    <section className={`${s.socialLinks} ${u.uppercase}`}>
      <div className={`${u.hidden} ${u.uppercase}`}>
        {locale === "cy" ? "Dilynwch ni ar" : "Follow us on"}{": "}
      </div>
      <ul className={`${s.socialLinksMenu} ${u.flex}`}>
        <li className={`${u.block}`}>
          {locale === "cy" ? "Dilynwch ni ar" : "Follow us on"}{": "}
        </li>
        {settings.social.map(link =>
          <li key={link._key}>
            <a href={link.url}>{link.name}</a>
          </li>
        )}
      </ul>
    </section>
  )
}
export default SocialLinks
