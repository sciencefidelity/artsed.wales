import { FC } from "react"
import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import Localize from "components/localize"
import { FooterProps } from "lib/interfaces"
import { LocaleString } from "generated/schema"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const Footer: FC<FooterProps> = ({ site }) => {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  const siteName = localize(site.siteName, locale).replace("and", "&")
  const contact: LocaleString = {
    _type: "localeString",
    cy: "Cysylltwch",
    en: "Contact"
  }
  const siteBy: LocaleString = {
    _type: "localeString",
    cy: "Site gan",
    en: "Site by"
  }
  return (
    <footer className={`${s.footer} ${u.sans} ${u.flex}`}>
      <div>
        <Localize data={contact} />{": "}
        <span className={u.lowercase}>
          <a
            href={"mailto:" + (locale === "cy" ? site.email.cy : site.email.en)}
          >
            <Localize data={site.email} />
          </a>
        </span>
        <br />
        <span className={`${u.hide} ${u.smBlock}`}>
          &copy;{" "}{year}{" "}{acronym(siteName)}
        </span>
        <span className={u.smHide}>
          &copy;{" "}{year}{" "}{siteName}
        </span>
      </div>
      <div>
        <br />
          <Localize data={siteBy} />{" "}<a href="https://mattcook.dev" target="_blank">Matt</a>
      </div>
    </footer>
  )
}
export default Footer
