import { useRouter } from "next/router"
import { capitalize } from "lib/utils"
import u from "styles/utils.module.scss"
import s from "components/layout.module.scss"

const Language = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const languages = ["cymreag", "english"]
  return (
    <div className={`${s.langLink} ${u.fgDark} ${u.pointer}`}>
      <span className={u.screenReaderText}>
        {locale === "cy"
          ? "Switch language to English"
          : "Newid iaith i'r Gymraeg"}
      </span>
      {locale === "cy" ? (
        <button
          className={`${s.langLink} ${u.pointer} ${u.uppercase}`}
          onClick={() => {
            router.push(
              {pathname, query}, asPath, {locale: locales[0], scroll: false}
            )
          }}
        >
          {capitalize(languages[1])}
        </button>
      ) : (
        <button
          className={`${s.langLink} ${u.pointer} ${u.uppercase} ${u.fgDark}`}
          onClick={() => {
            router.push(
              {pathname, query}, asPath, {locale: locales[1], scroll: false}
            )
          }}
        >
          {" "}{capitalize(languages[0])}
        </button>
      )}
    </div>
  )
}
export default Language
