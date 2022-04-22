import { FC, ReactNode } from "react"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import BaseHead from "components/baseHead"
import Footer from "components/footer"
import Header from "components/header"
import { Navigation, Settings } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  children: ReactNode
  navigation: Navigation
  settings: Settings
}

const Layout: FC<Props> = ({ children, navigation, settings }) => {
  const router = useRouter()
  const { locale } = router
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
