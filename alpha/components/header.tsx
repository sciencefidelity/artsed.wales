import { FC } from "react"
import { acronym, buildUrl } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
import Localize from "components/localize"
import Logo from "components/logo"
import { Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  navigation: Navigation
  settings: Settings
}

const Header: FC<Props> = ({ navigation, settings }) => {
  return (
    <header className={`${u.py3} ${u.borderBottom2}`}>
      <div className={`${u.container}`}>
        <div className={`${u.grid} ${u.gridCols3} ${u.itemsCenter}`}>
          <nav>
            <ul className={`${u.sans} ${u.fontMedium} ${u.uppercase}`}>
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
            ${u.mono} ${u.fontBold} ${u.uppercase}
          `}>
            <div className={`${u.flex} ${u.gap2} ${u.justifyCenter}`}>
              <Link href="/" className={`${u.flex} ${u.gap2} ${u.noUnderline}`}>
                <Logo />
                <div className={`${u.inlineBlock}`}>
                  <div className={`${u.borderBottom2} ${u.inlineBlock}`}>RCCA</div>
                  <br />
                  <div className={`${u.inlineBlock}`}>NAEN</div>
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
        </div>
      </div>
    </header>
  )
}
export default Header
