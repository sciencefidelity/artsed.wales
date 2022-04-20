import { FC, ReactNode } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import BaseHead from "components/baseHead"
import Footer from "components/footer"
import Header from "components/header"
import { } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  children: ReactNode
  company: Company
  settings: Settings
}

const Layout: FC<Props> = ({ children, company, settings }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <>
      <BaseHead {settings} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout
