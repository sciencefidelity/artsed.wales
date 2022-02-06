import { FC } from "react"
import { useRouter } from "next/router"
import Localize from "components/localize"
import { FooterProps } from "lib/interfaces"
import { LocaleString } from "generated/schema"
import s from "components/footer.module.scss"
import u from "styles/utils.module.scss"

const Footer: FC<FooterProps> = ({ site }) => {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  const siteName: LocaleString = {
    _type: "localeString",
    cy: site.siteName.cy,
    en: site.siteName.en.replace("and", "&")
  }
  const contact: LocaleString = {
    _type: "localeString",
    cy: "",
    en: "Contact"
  }
  return (
    <footer className={`${s.footer} ${u.sans} ${u.flex}`}>
      <div style={{ marginLeft: "4.5rem" }}>
        <Localize data={contact} />{": "}
        <span className={u.lowercase} style={{ textDecoration: "none" }}>
          <a
            href={"mailto:" + (locale === "cy" ? site.email.cy : site.email.en)}
          >
            <Localize data={site.email} />
          </a>
        </span>
        <br />
        <span>
          &copy;{" "}{year}{" "}<Localize data={siteName} />
        </span>
      </div>
      <div style={{ marginRight: "4.5rem" }}>
        <br />
          Site by <a href="https://mattcook.dev" target="_blank">Matt</a>
      </div>
    </footer>
  )
}
export default Footer
