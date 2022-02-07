import { FC } from "react"
import { useRouter } from "next/router"
// import { acronym } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
// import Logo from "components/logo"
import { HeaderProps } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "components/header.module.scss"

const Header: FC<HeaderProps> = ({ site }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <header className={`${s.header} ${u.bgLight}`}>
      <div className={`${s.container} ${u.flex} ${u.sans} ${u.uppercase} ${u.w100} ${u.gapSmall}`}>
{/*         <div>{acronym(site.siteName.en)}</div> */}
        <div>
          <Link href="/" className={s.siteName}>
            {locale === "cy"
              ? site.siteName.cy
              : site.siteName.en.replace("and", "&")}
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
