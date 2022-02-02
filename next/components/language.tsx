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
    <nav className={`${s.nav} ${u.flex} ${u.column} ${u.mlAuto}`}>
      <div className={`h1 ${s.navItem} ${u.sans}`}>
        <div className={s.languageSwitcher}>
          <span className={u.screenReaderText}>
            {locale === "cy"
              ? "Switch language to English"
              : "Newid iaith i'r Gymraeg"}
          </span>
          {locale === "cy" ? (
            <span
              className={`
                ${s.navLink} ${u.fgLight} ${u.pointer} ${u.arrowLeft}`
              }
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: locales[0] })
              }}
            >
              {capitalize(languages[1])}
            </span>
          ) : (
            <span
              className={
                `${s.navLink} ${u.fgLight} ${u.pointer} ${u.arrowLeft}`
              }
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: locales[1] })
              }}
            >
              {" "}{capitalize(languages[0])}
            </span>
          )}
        </div>
      </div>
      <div className={`h1 ${s.navItem} ${u.sans}`}>
        <Link href="/courses"
          className={`${s.navLink} ${u.fgLight}`}
        >
          <div className={`${u.inlineBlock} ${u.arrowRight}`}>
            {locale === "cy" ? "Cyrsiau" : "Courses"}{" "}
          </div>
        </Link>
      </div>
    </nav>
  )
}
export default Language
