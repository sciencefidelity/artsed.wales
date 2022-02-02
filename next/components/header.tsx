import Language from "components/language"
import Link from "components/link"
import u from "styles/utils.module.scss"
import s from "components/header.module.scss"

const Header = () => {
  return (
    <header className={u.bgDark}>
      <div className={`${s.headerContainer} ${u.flex}`}>
        <div className={s.brand}>
          <Link href="/">

          </Link>
        </div>
        <div className={s.name}>
          <h1 className={s.nameEy}>
            National Arts and Education Network
          </h1>
          <h1 className={s.nameCy}>
            National Arts and Education Network
          </h1>
          <h1 className={`${s.acronEn} ${u.hide}`}></h1>
          <h1 className={`${s.acronCn} ${u.hide}`}></h1>
        </div>
        <Language />
      </div>
    </header>
  )
}
export default Header
