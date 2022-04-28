import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import { Settings } from "lib/interfaces"

interface Props {
  settings: Settings
}

const BaseHead: FC<Props> = ({ settings }) => {
  const { locale } = useRouter()
  return (
    <Head>
      <title>{localize(settings.siteName, locale)}</title>
      <meta name="Description" content={localize(settings.siteDescription, locale)} />
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
      {/* Facebook */}
      <meta
        property="og:title"
        content={locale === "cy" && settings.facebookCard.cy.title
          ? settings.facebookCard.cy.title
          : settings.facebookCard.en.title}
      />
      <meta
        property="og:description"
        content={locale === "cy" && settings.facebookCard.cy.description
          ? settings.facebookCard.cy.description
          : settings.facebookCard.en.description}
      />
      <meta
        property="og:url"
        content={locale === "cy" && settings.meta.cy.canonicalURL
          ? settings.meta.cy.canonicalURL
          : settings.meta.en.canonicalURL}
      />
      <meta
        property="og:image"
        content={urlFor(settings.facebookCard.cy.image
            ? settings.facebookCard.cy.image
            : settings.facebookCard.en.image)
          .auto("format")
          .width(1200)
          .height(630)
          .quality(85)
          .url()}
        />
      <meta
        property="og:site_name"
        content={localize(settings.siteName, locale)}
      />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="article" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={locale === "cy" && settings.twitterCard.cy.title
          ? settings.twitterCard.cy.title
          : settings.twitterCard.en.title}
      />
      <meta
        name="twitter:description"
        content={locale === "cy" && settings.facebookCard.cy.description
          ? settings.facebookCard.cy.description
          : settings.facebookCard.en.description}
      />
      <meta
        name="twitter:site"
        content={locale === "cy" && settings.meta.cy.canonicalURL
          ? settings.meta.cy.canonicalURL
          : settings.meta.en.canonicalURL}
      />
      <meta
        name="twitter:image"
        content={urlFor(settings.facebookCard.cy.image
            ? settings.facebookCard.cy.image
            : settings.facebookCard.en.image)
          .auto("format")
          .width(1200)
          .height(630)
          .quality(85)
          .url()}
      />
      <meta name="twitter:creator" content="@artsed_wales" />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
    </Head>
  )
}
export default BaseHead
