import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import Localize from "components/localize"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const Footer: FC = () => {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  const siteBy: any = {
    _type: "localeString",
    cy: "Safle gan",
    en: "Site by"
  }
  return (
    <footer className={u.container}>
      <div>
        <span>
          &copy;{" "}{year}{" "}
        </span>
      </div>
      <div>
        <Localize data={siteBy} />{" "}
        <a href="https://mattcook.dev" target="_blank" rel="noreferrer">
          Matt
        </a>
      </div>
    </footer>
  )
}
export default Footer
