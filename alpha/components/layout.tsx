import { FC, ReactNode } from "react"
import BaseHead from "components/baseHead"
import Footer from "components/footer"
import Header from "components/header"
import Logos from "components/logos"
import SignUp from "components/signUp"
import SocialLinks from "components/socialLinks"
import { Company, Label, Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/layout.module.scss"

interface Props {
  children: ReactNode
  company: Company
  labels: Label[]
  navigation: Navigation
  settings: Settings
}

const Layout: FC<Props> = ({
  children,
  company,
  labels,
  navigation,
  settings
}) => {
  return (
    <>
      <BaseHead settings={settings} />
      <Header navigation={navigation} settings={settings} />
      <main className={`${s.main}`}>{children}</main>
      <section className={u.container}>
        <SignUp labels={labels}/>
        <SocialLinks settings={settings} />
        <hr />
        <Logos />
      </section>
      <Footer settings={settings} company={company} />
    </>
  )
}
export default Layout
