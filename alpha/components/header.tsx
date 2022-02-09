import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
import { HeaderProps } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const Header: FC<HeaderProps> = ({ site }) => {
  const router = useRouter()
  const { locale } = router
  const siteName = localize(site.siteName, locale).replace("and", "&")
  return (
    <header className={`${s.header} ${u.bgLight}`}>
      <div className={`
        ${u.container}
        ${u.flex}
        ${u.sans}
        ${u.uppercase}
        ${u.w100}
        ${u.gapSmall}
        ${u.gapLgNone}
      `}>
        <div className={`${u.lgHide}`}>
          <Link href="/" className={`${s.siteName}`}>
            {siteName}
          </Link>
        </div>
        <div className={`${u.hide} ${u.lgBlock}`}>
          <Link href="/" className={`${s.acron}`}>
            {acronym(siteName)}
          </Link>
        </div>
        <div className={`${u.fAuto}`}>
          <span style={{ paddingRight: 20 }}>
            <Link href="/about" className={s.navLinks}>
              {locale === "cy" ? "Amdan" : "About"}
            </Link>
          </span>
          <span>
            <Link href="/courses" className={s.navLinks}>
              {locale === "cy" ? "Cyrsiau" : "Courses"}
            </Link>
          </span>
        </div>
        <div className={`${u.textRight} ${u.fNone}`}><Language /></div>
      </div>
    </header>
  )
}
export default Header
