import { FC, Fragment } from "react"
import { useRouter } from "next/router"
import { acronym, buildUrl } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
import Localize from "components/localize"
import ColorLogo from "components/icons/colorLogo"
import { Label, Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation
  settings: Settings
}

const Header: FC<Props> = ({ labels, navigation, settings }) => {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <header className={`${s.header}`}>
      <nav className={`${u.container} ${s.nav}`}>
        <div>
          <ul className={`${u.uppercase}`}>
            {navigation.primary.map(item =>
              <Fragment key={item._key}>
                <li className={`
                  ${u.inline} ${s.navLeft}
                  ${pathname === buildUrl(item.url._type, item.url.slug)
                    ? s.active : ""
                  }
                `}>
                  <Link href={buildUrl(item.url._type, item.url.slug)}>
                    <Localize data={item.label} />
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
        <div className={`
          ${u.mono} ${u.bold} ${u.uppercase}
        `}>
          <div className={`${u.flex} ${u.justifyCenter}`}>
            <Link href="/" className={`${u.flex} ${u.gap4}`}>
              <ColorLogo />
              <div className={`${u.inlineBlock}`}>
                <div className={`${s.logoText}`}>
                  {acronym(settings.siteName.cy)}
                </div>
                <br />
                <div className={`${s.logoText}`}>
                  {acronym(settings.siteName.en)}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <ul className={`
            ${u.sans} ${u.fontMedium} ${u.textRight} ${u.uppercase}
          `}>
            {/* <li className={`${u.inline} ${s.navRight}`}>Resources</li> */}
            <li className={`${u.inline} ${s.navRight}`}>
              <Language labels={labels} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header
