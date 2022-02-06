import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import Footer from "components/footer"
import Header from "components/header"
import Logos from "components/logos"
import SignUp from "components/signUp"
import Scrollup from "components/scrollup"
import { LayoutProps } from "lib/interfaces"
import s from "components/layout.module.scss"
import u from "styles/utils.module.scss"

const Layout: FC<LayoutProps> = ({
  children,
  statements,
  site,
  title
}) => {
  const router = useRouter()
  const { locale } = router
  const slug = title ? title.en.toLowerCase() : ""
  const siteName = localize(site.siteName, locale)
  const siteDescription = localize(site.siteDescription, locale)
  const keywords = localize(site.keywords, locale)
  const seoTitle = localize(site.seoTitle, locale)
  const seoDescription = localize(site.seoDescription, locale)
  const seoImage = urlFor(site.seoImage)
    .format("jpg")
    .width(1200)
    .height(630)
    .quality(85)
    .url()
  return (
    <div className={s.siteMain}>
      <Head>
        <title>
          {title && (locale === "cy" ? title.cy : title.en)}
          {title && " | "}
          {siteName}
        </title>
        {site.seoDescription &&
          <meta name="Description" content={siteDescription} />
        }
        {site.keywords && <meta name="keywords" content={keywords} />}
        <link
          rel="preload"
          href="/fonts/ApercuPro.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts//freighttextprosemibold-regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/freighttextprobook-regular.woff2"
          as="font"
          crossOrigin=""
        />
        {seoTitle && <meta property="og:title" content={seoTitle} />}
        {seoDescription &&
          <meta property="og:description" content={seoDescription} />
        }
        <meta
          property="og:url"
          content={locale === "cy"
            ? `https://celfadd.cymru/${slug}`
            : `https://artsed.wales/${slug}`
          }
        />
        <meta property="og:image" content={seoImage} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:site" content={site.twitterHandle} />
        <meta name="twitter:image" content={seoImage} />
        <meta name="twitter:creator" content={site.twitterHandle} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#FF9B59" />
      </Head>
      <Header site={site} />
      <main className={s.content}>
        <div className={u.container}>{children}</div>
        <SignUp
          statements={statements}
          site={site}
        />
        <Logos />
      </main>
      <Footer site={site} />
{/*       <Scrollup /> */}
    </div>
  )
}
export default Layout
