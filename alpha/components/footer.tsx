import { FC } from "react"
import { useRouter } from "next/router"
import { localize } from "lib/utils"
import Localize from "components/localize"
import { Company, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  company: Company
  settings: Settings
}

const Footer: FC<Props> = ({ company, settings }) => {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  const siteBy: any = {
    _type: "localeString",
    cy: "Safle gan",
    en: "Site by"
  }
  return (
    <footer className={`${u.container} ${s.footer} ${u.grid}`}>
      <div>
        <span className={`${s.footerContent}`}>
          Contact: <a href={`mailto:${localize(company.email, locale)}`}>
            <Localize data={company.email} />
          </a>
        </span><br />
        <span className={`${s.footerContent}`}>
          &copy;{" "}{year}{" "}<Localize data={settings.siteName} />
        </span>
      </div>
      <div>
        <span className={`${s.footerContent}`}>&nbsp;</span><br />
        <span className={`${s.footerContent}`}>
          <Localize data={siteBy} />{" "}
          <a href="https://mattcook.dev" target="_blank" rel="noreferrer">
            matt
          </a>
        </span>
      </div>
    </footer>
  )
}
export default Footer
