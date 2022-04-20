import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { Company, Settings } from "lib/interfaces"

interface Props {
  company: Company
  settings: Settings
}

const BaseHead: FC<Props> = ({ company, settings }) => {
  const { locale } = useRouter()
  return (
    <Head>
      <title>{company.title.en}</title>
      <meta name="Description" content={settings.siteDescription.en} />
      <meta name="keywords" content="" />
      <link
        rel="preload"
        href="/fonts/PitchSans-Bold.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Calibre-Medium.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Calibre-Bold.woff2"
        as="font"
        crossOrigin=""
      />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta
        property="og:url"
        content={locale === "cy"
          ? `https://celfadd.cymru/`
          : `https://artsed.wales/`
        }
      />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="article" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:creator" content="" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
    </Head>
  )
}
export default BaseHead
