import { FC } from "react"
import Localize from "components/localize"
import { Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  settings: Settings
}

const Footer: FC<Props> = ({ settings }) => {
  const year = new Date().getFullYear()
  const siteBy: any = {
    _type: "localeString",
    cy: "Safle gan",
    en: "Site by"
  }
  return (
    <footer className={`${u.container} ${s.footer} ${u.grid}`}>
      <div>
        <span>
          &copy;{" "}{year}{" "}<Localize data={settings.siteName} />
        </span>
      </div>
      <div>
        <Localize data={siteBy} />{" "}
        <a href="https://mattcook.dev" target="_blank" rel="noreferrer">
          matt
        </a>
      </div>
    </footer>
  )
}
export default Footer
