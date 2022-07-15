import { useRouter } from "next/router"
import { acronym, localize } from "lib/utils"
import { Localize } from "components/localize"
import { Company, Label, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  company: Company
  labels: Label[]
  settings: Settings
}

/**
 * The site footer
 * @remarks formats the company data into a footer on the site
 * @param company - the {@link Company} singleton defining company information
 * @param labels - {@link Label} an array of LocaleStrings defining site labels
 * @param settings - {@link Settings} singleton defining site settings
 * @returns The JSX Code for the footer
 */
export function Footer({ company, labels, settings }: Props) {
  const { locale } = useRouter()
  const year = new Date().getFullYear()
  return (
    <footer className={`${u.container} ${s.footer} ${u.flex}`}>
      <div>
        <span className={`${s.footerContent}`}>
          <Localize data={labels[22].text} />
          {": "}
          {locale && (
            <a href={`mailto:${localize(company.email, locale)}`}>
              <Localize data={company.email} />
            </a>
          )}
        </span>
        <br />
        <span className={`${s.footerContent}`}>
          &copy; {year}{" "}
          <span className={`${s.brandMd}`}>
            <Localize data={settings.siteName} />
          </span>
          {locale && (
            <span className={`${s.brandSm}`}>
              {acronym(localize(settings.siteName, locale))}
            </span>
          )}
        </span>
      </div>
      <div>
        <span className={`${s.footerContent}`}>&nbsp;</span>
        <br />
        <span className={`${s.footerContent}`}>
          <Localize data={labels[23].text} />{" "}
          <a href="https://mattcook.dev" target="_blank" rel="noreferrer">
            matt
          </a>
        </span>
      </div>
    </footer>
  )
}
