import { useRouter } from "next/router"
import { capitalize } from "lib/utils"
// import Link from "components/link"
import u from "styles/utils.module.scss"
import s from "components/language.module.scss"

const Language = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const languages = ["cymreag", "english"]
  return (
    <div className={s.languageSwitcher}>
      <span className={u.screenReaderText}>
        {locale === "cy"
          ? "Switch language to English"
          : "Newid iaith i'r Gymraeg"}
      </span>
      {locale === "cy" ? (
        <span
          className={`
            ${s.navLink} ${u.fgDark} ${u.pointer}`
          }
          onClick={() => {
            router.push({ pathname, query }, asPath, { locale: locales[0], scroll: false })
          }}
        >
          {capitalize(languages[1])}
        </span>
      ) : (
        <span
          className={
            `${s.navLink} ${u.fgDark} ${u.pointer}`
          }
          onClick={() => {
            router.push({ pathname, query }, asPath, { locale: locales[1], scroll: false })
          }}
        >
          {" "}{capitalize(languages[0])}
        </span>
      )}
    </div>
  )
}
export default Language
