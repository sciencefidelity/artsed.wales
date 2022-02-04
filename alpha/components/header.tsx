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
  const { pathname, asPath, query, locale, locales } = router
  return (
    <header className={`${s.header} `}>
      <div className={`${s.container} ${u.flex} ${u.sans} ${u.uppercase} ${u.w100} ${u.gapSmall}`}>
{/*         <div>{acronym(site.siteName.en)}</div> */}
        <div className={s.siteName}>
          <Link href="/">
            {locale === "cy"
              ? site.siteName.cy
              : site.siteName.en.replace("and", "&")}
          </Link>
        </div>
        <div className={`${u.fAuto}`}>
          <span style={{ paddingRight: 20 }}>
            <Link href="/about">
              {locale === "cy" ? "Amdan" : "About"}
            </Link>
          </span>
          <span>
            <Link href="/courses">
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
