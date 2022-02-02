import { FC } from "react"
import { acronym } from "lib/utils"
import Language from "components/language"
import Link from "components/link"
import Logo from "components/logo"
import { HeaderProps } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "components/header.module.scss"

const Header: FC<HeaderProps> = ({ site }) => {
  return (
    <header className={u.bgDark}>
      <div className={`${s.headerContainer} ${u.flex}`}>
        <div className={s.brand}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className={s.name}>
          <h1 className={s.nameEn}>{site.siteName.en}</h1>
          <h1 className={s.nameCy}>{site.siteName.cy}</h1>
          <h1 className={`${s.acronEn} ${u.hide}`}>
            {acronym(site.siteName.en)}
          </h1>
          <h1 className={`${s.acronCy} ${u.hide}`}>
            {acronym(site.siteName.cy)}
          </h1>
        </div>
        <Language />
      </div>
    </header>
  )
}
export default Header
