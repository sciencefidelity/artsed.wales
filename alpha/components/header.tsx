import { FC } from "react"
import { acronym, buildUrl } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
import Localize from "components/localize"
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)"
        }}>
          <nav>
            <ul className={`${u.sans} ${u.fontMedium} ${u.uppercase}`}>
              {navigation.primary.map((item, idx) =>
                <li key={item._id} className={`
                  ${u.inline} ${idx === 0 && u.mr3}
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
            ${u.mono} ${u.fontBold} ${u.textCenter} ${u.uppercase}
          `}>
            <Link href="/" className={`${u.noUnderline}`}>
              <div className={`${u.borderBottom2} ${u.inlineBlock}`}>RCCA</div>
              <br />
              <div className={`${u.inlineBlock}`}>NAEN</div>
            </Link>
          </div>
          <div>
            <ul className={`${u.sans} ${u.fontMedium} ${u.textRight} ${u.uppercase}`}>
              <li className={`${u.inline}`}>
                Contact
              </li>
              <li className={`${u.inline} ${u.ml3}`}>
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
