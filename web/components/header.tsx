import { FC, Fragment, useState } from "react"
import { useRouter } from "next/router"
import { acronym, buildURL } from "lib/utils"
import { Language } from "components/language"
import { LinkTo } from "components/linkTo"
import { Localize } from "components/localize"
import { ColorLogo } from "components/icons/colorLogo"
import { Label, Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  labels: Label[]
  navigation: Navigation
  settings: Settings
}

export function Header({ labels, navigation, settings }: Props) {
  const [isActive, setActive] = useState(false)
  const { locale, pathname } = useRouter()
  const menuOpen = () => {
    setActive(true)
  }
  const menuClose = () => {
    setActive(false)
  }
  return (
    <header
      className={`${s.header}`}
      onClick={isActive ? menuClose : undefined}
    >
      <nav className={`${u.container} ${s.nav}`}>
        <div
          className={`${s.overlay} ${isActive ? s.overlayActive : undefined}`}
          onClick={isActive ? menuClose : undefined}
        >
          <ul className={`${s.overlayNav} ${u.uppercase}`}>
            <li className={`${s.overlayNavItem}`}>
              <LinkTo href="/">{locale === "cy" ? "Cartref" : "Home"}</LinkTo>
            </li>
            {navigation.primary.map((item) => (
              <Fragment key={item._key}>
                <li
                  className={`
                  ${s.overlayNavItem}
                  ${
                    pathname === buildURL(item.url._type, item.url.slug)
                      ? s.active
                      : undefined
                  }
                `}
                >
                  <LinkTo href={buildURL(item.url._type, item.url.slug)}>
                    <Localize data={item.label} />
                  </LinkTo>
                </li>
              </Fragment>
            ))}
            <li className={`${s.overlayNavItem}`}>
              <Language labels={labels} />
            </li>
          </ul>
        </div>
        <div className={`${s.navLeft}`}>
          <ul className={`${u.uppercase}`}>
            {navigation.primary.map((item) => (
              <Fragment key={item._key}>
                <li
                  className={`
                  ${u.inline} ${s.navItemLeft}
                  ${
                    pathname === buildURL(item.url._type, item.url.slug)
                      ? s.active
                      : undefined
                  }
                `}
                >
                  <LinkTo href={buildURL(item.url._type, item.url.slug)}>
                    <Localize data={item.label} />
                  </LinkTo>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
        <div
          className={`
          ${u.mono} ${u.bold} ${u.uppercase}
        `}
        >
          <div className={`${s.logoContainer} ${u.flex}`}>
            <LinkTo href="/" className={`${s.headerLogo} ${u.flex}`}>
              <ColorLogo />
              <div className={`${u.inlineBlock}`}>
                <div className={`${s.logoText}`}>
                  {acronym(settings.siteName.cy)}
                </div>
                <br />
                <div className={`${s.logoText}`}>
                  {acronym(settings.siteName.en)}
                </div>
              </div>
            </LinkTo>
          </div>
        </div>
        <div className={`${s.navLeft}`}>
          <ul
            className={`
            ${u.sans} ${u.fontMedium} ${u.textRight} ${u.uppercase}
          `}
          >
            <li className={`${u.inline} ${s.navItemRight}`}>
              <Language labels={labels} />
            </li>
          </ul>
        </div>
        <button
          className={`${s.hamburgerContainer}`}
          onClick={isActive ? menuClose : menuOpen}
          type="button"
        >
          <span className={`${u.screenReaderText}`}>
            {locale === "cy" ? "Prif Ddewislen" : "Main Menu"}
          </span>
          <span
            className={`${s.hamburger} ${isActive ? s.navActive : undefined}`}
          />
        </button>
      </nav>
    </header>
  )
}
