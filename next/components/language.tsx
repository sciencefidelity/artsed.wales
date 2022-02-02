import { useRouter } from "next/router"
import { capitalize } from "lib/utils"
import Link from "components/link"
import u from "styles/utils.module.scss"
import s from "components/language.module.scss"

const Language = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const languages = ["cymreag", "english"]
  return (
    <nav className={`${u.nav} ${u.flex} ${u.column} ${u.mlAuto}`}>
      <div className={`${u.navItem} ${u.h1} ${u.sans}`}>
        <div className="languageSwitcher">
          <span className="screenReaderText">
            {locale === "cy"
              ? "Switch language to English"
              : "Newid iaith i'r Gymraeg"}
          </span>
          {locale === "cy" ? (
            <span
              className={`${s.navLink} ${u.fgLight}`}
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: locales[0] })
              }}
            >
              {capitalize(languages[1])}
            </span>
          ) : (
            <span
              className={`${s.navLink} ${u.fgLight}`}
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: locales[1] })
              }}
            >
              {capitalize(languages[0])}
            </span>
          )}
        </div>
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
