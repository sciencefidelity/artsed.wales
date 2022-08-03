import { useRouter } from "next/router"
import { capitalize } from "lib/utils"
import { Label } from "lib/interfaces"
import { Localize } from "components/localize"
import u from "styles/utils.module.scss"

interface Props {
  labels: Label[]
}

export function Language({ labels }: Props) {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const languages = ["cymraeg", "english"]

  function handleClick() {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push({ pathname, query }, asPath, {
      scroll: false,
      shallow: true,
      locale: locales && locales[locale === "cy" ? 0 : 1],
    })
  }
  return (
    <>
      <span className={u.screenReaderText}>
        <Localize data={labels[25].text} />
      </span>
      <button
        className={`${u.uppercase} ${u.pointer}`}
        type="button"
        onClick={() => handleClick()}
      >
        {capitalize(languages[1])}
      </button>
    </>
  )
}
