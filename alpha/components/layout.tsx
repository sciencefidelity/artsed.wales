import { FC, ReactNode } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import { BaseHead } from "components/BaseHead"
import Footer from "components/footer"
import Header from "components/header"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter()
  const { locale } = router
  return (
    <>
      <BaseHead />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout
