import { FC, ReactNode } from "react"
import BaseHead from "components/baseHead"
import Footer from "components/footer"
import Header from "components/header"
import SignUp from "components/signUp"
import { Label, Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  children: ReactNode
  labels: Label[]
  navigation: Navigation
  settings: Settings
}

const Layout: FC<Props> = ({ children, labels, navigation, settings }) => {
  return (
    <>
      <BaseHead settings={settings} />
      <Header navigation={navigation} settings={settings} />
      <main className={u.container}>{children}</main>
      <section className={u.container}><SignUp labels={labels}/></section>
      <Footer settings={settings} />
    </>
  )
}
export default Layout
