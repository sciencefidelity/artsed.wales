import { FC } from "react"
import { useRouter } from "next/router"
import { capitalize } from "lib/utils"
import { Label } from "lib/interfaces"
import { Localize } from "components/localize"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
}

export const Language: FC<Props> = ({ labels }) => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const languages = ["cymraeg", "english"]
  return (
    <>
      <span className={u.screenReaderText}>
        <Localize data={labels[25].text} />
      </span>
      {locale === "cy" ? (
        <button
          className={`${u.uppercase} ${u.pointer}`}
          onClick={() => {
            router.push(
              {pathname, query},
              asPath,
              {scroll: false, shallow: true, locale: locales[0]}
            )
          }}
        >{capitalize(languages[1])}</button>
      ) : (
        <button
          className={`${u.uppercase} ${u.pointer}`}
          onClick={() => {
            router.push(
              {pathname, query},
              asPath,
              {scroll: false, shallow: true, locale: locales[1]}
            )
          }}
        >{" "}{capitalize(languages[0])}</button>
      )}
    </>
  )
}
