import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Header from "components/header"
import { LayoutProps } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const Layout: FC<LayoutProps> = ({
  children,
  site,
  title
}) => {
  const router = useRouter()
  const { locale } = router
  return (
    <div className={s.siteMain}>
      <Head>
        <title>
          {title && (locale === "cy" ? title.cy : title.en)}
          {title && " | "}
          {locale === "cy" && site.siteName.cy ? site.siteName.cy : site.siteName.en}
        </title>
      </Head>
      <Header
        site={site}
      />
      <main>
        <div className={u.container}>{children}</div>
      </main>
    </div>
  )
}
export default Layout
