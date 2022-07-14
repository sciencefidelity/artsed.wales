import { BaseHead } from "components/baseHead"
import { Footer } from "components/footer"
import { Header } from "components/header"
import { Logos } from "components/logos"
import { SignUp } from "components/signUp"
import { SocialLinks } from "components/socialLinks"
import {
  Company,
  HeadProps,
  Label,
  Navigation,
  Settings,
  WithChildren,
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

type Props = WithChildren<{
  company: Company
  labels: Label[]
  navigation: Navigation
  // TODO: create default props for pageHead
  // eslint-disable-next-line react/require-default-props
  pageHead?: HeadProps
  settings: Settings
}>

/**
 * The Layout component
 * @remarks defines the layout of the whole site
 * @param children - ReactNode
 * @param company - the {@link Company} singleton defining company information
 * @param labels - {@link Label} an array of LocaleStrings defining site labels
 * @param navigation - {@link Navigation} singleton defining site navigation
 * @param pageHead - the {@link HeadProps} constructed on each page
 * @param settings - {@link Settings} singleton defining site settings
 * @returns The JSX Code for the document site layout
 */
export function Layout({
  children,
  company,
  labels,
  navigation,
  pageHead,
  settings,
}: Props) {
  return (
    <>
      <BaseHead pageHead={pageHead} settings={settings} />
      <Header labels={labels} navigation={navigation} settings={settings} />
      <main className={`${s.main}`}>{children}</main>
      <section className={u.container}>
        <SignUp labels={labels} />
        <SocialLinks settings={settings} />
        <hr />
        <Logos />
      </section>
      <Footer company={company} labels={labels} settings={settings} />
    </>
  )
}
