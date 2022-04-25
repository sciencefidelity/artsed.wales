import { FC } from "react"
import { acronym, buildUrl } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
import Localize from "components/localize"
import ColorLogo from "components/colorLogo"
import { Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  navigation: Navigation
  settings: Settings
}

const Header: FC<Props> = ({ navigation, settings }) => {
  return (
    <header className={`${s.header}`}>
      <nav className={`${u.container} ${s.nav}`}>
        <nav>
          <ul className={`${u.uppercase}`}>
            {navigation.primary.map((item, idx) =>
              <li key={item._id} className={`
                ${u.inline} ${idx === 0 && u.mr6}
              `}>
                <Link
                  href={buildUrl(item.url._type, item.url.slug)}
                  className={`${u.noUnderline}`}
                >
                  <Localize data={item.label} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className={`
          ${u.mono} ${u.bold} ${u.uppercase}
        `}>
          <div className={`${u.flex} ${u.gap2} ${u.justifyCenter}`}>
            <Link href="/" className={`${u.flex} ${u.gap2} ${u.noUnderline}`}>
              <ColorLogo />
              <div className={`${u.inlineBlock}`}>
                <div className={`${u.borderBottom2} ${u.inlineBlock}`}>{acronym(settings.siteName.cy)}</div>
                <br />
                <div className={`${u.inlineBlock}`}>{acronym(settings.siteName.en)}</div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <ul className={`${u.sans} ${u.fontMedium} ${u.textRight} ${u.uppercase}`}>
            <li className={`${u.inline}`}>
              Contact
            </li>
            <li className={`${u.inline} ${u.ml6}`}>
              <Language />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header
