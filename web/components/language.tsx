import { useRouter } from "next/router"
import { capitalize } from "lib/utils"
import u from "styles/utils.module.scss"
import s from "components/layout.module.scss"

const Language = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const languages = ["cymraeg", "english"]
  return (
    <div className={`${s.langLink} ${u.fgDark} ${u.pointer}`}>
      <span className={u.screenReaderText}>
        {locale === "cy"
          ? "Switch language to English"
          : "Newid yr iaith i Gymraeg"}
      </span>
      {locale === "cy" ? (
        <button
          className={`${s.langLink} ${u.pointer} ${u.uppercase}`}
          onClick={() => {
            router.push(
              {pathname, query}, null, {scroll: false, shallow: true, locale: locales[0]}
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
              {pathname, query}, null, {scroll: false, shallow: true, locale: locales[1]}
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
