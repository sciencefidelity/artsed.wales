import { FC, ReactNode } from "react"
import BaseHead from "components/baseHead"
import Footer from "components/footer"
import Header from "components/header"
import { Navigation, Settings } from "lib/interfaces"
import u from "styles/utils.module.scss"

interface Props {
  children: ReactNode
  navigation: Navigation
  settings: Settings
}

const Layout: FC<Props> = ({ children, navigation, settings }) => {
  return (
    <>
      <BaseHead settings={settings} />
      <Header navigation={navigation} settings={settings} />
      <main className={u.container}>{children}</main>
      <Footer settings={settings} />
    </>
  )
}
export default Layout
