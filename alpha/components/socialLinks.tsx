import { FC, ReactElement } from "react"
import { Settings } from "lib/interfaces"
import {
  Facebook,
  Instagram,
  LinkedIn,
  Paperclip,
  Pinterest,
  Twitter,
  YouTube
} from "components/icons/social"
import s from "styles/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  settings: Settings
}

const SocialLinks: FC<Props> = ({ settings }) => {

  const icon = (network: string): ReactElement<any, any> => {
    switch (network) {
    case "facebook":
      return <Facebook />
    case "instagram":
      return <Instagram />
    case "linkedin":
      return <LinkedIn />
    case "pinterest":
      return <Pinterest />
    case "youtube":
      return <YouTube />
    case "twitter":
      return <Twitter />
    default:
      return <Paperclip />
    }
  }

  const background = (network: string): string => {
    switch (network) {
    case "facebook":
      return "#1778F2"
    case "instagram":
      return "#E4405F"
    case "linkedin":
      return "#0A66C2"
    case "pinterest":
      return "#c8232c"
    case "youtube":
      return "#c4342d"
    case "twitter":
      return "#1DA1F2"
    default:
      return "#54BE93"
    }
  }

  return (
    <section className={`${s.socialLinks} ${u.uppercase} ${u.flex}`}>
      <ul className={`${s.socialLinksMenu} ${u.flex}`}>
        {settings.social.map(link =>
          <li key={link._key}>
            <a href={link.url} target="_blank" rel="noreferrer">
              <div
                className={`${s.socialIcon}`}
                style={{
                  backgroundColor: background(link.name)
                }}
              >{icon(link.name)}</div>
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}
export default SocialLinks
