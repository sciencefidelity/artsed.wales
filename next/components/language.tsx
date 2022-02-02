import Link from "components/link"
import u from "styles/utils.module.scss"
import s from "components/language.module.scss"

const Language = () => {
  return (
    <nav className={`${u.nav} ${u.flex} ${u.column} ${u.mlAuto}`}>
      <div className={`${u.navItem} ${u.h1} ${u.sans}`}>
        <Link href=""
          className={`${s.navLink} ${u.fgLight}`}
        >
          <div className={`${u.inlineBlock} ${u.arrowLeft}`}>

          </div>
        </Link>
      </div>
      <div className={`${u.navItem} ${u.h1} ${u.sans}`}>
        <Link href="/courses"
          className={`${s.navLink} ${u.fgLight}`}
        >
          <div className={`${u.inlineBlock} ${u.arrowRight}`}>

          </div>
        </Link>
      </div>
    </nav>
  )
}
export default Language
