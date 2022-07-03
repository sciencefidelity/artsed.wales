import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { localize, urlFor } from "lib/utils"
import { HeadProps, Settings } from "lib/interfaces"

interface Props {
	pageHead?: HeadProps
	settings: Settings
}

export const BaseHead: FC<Props> = ({ pageHead, settings }) => {
	const { locale } = useRouter()
	return (
		<Head>
			<title>
				{pageHead && pageHead.title
					? pageHead.title
					: localize(settings.siteName, locale)}
			</title>
			<meta
				name="Description"
				content={
					pageHead && pageHead.description
						? pageHead.description
						: localize(settings.siteDescription, locale)
				}
			/>
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
				content={
					pageHead && pageHead.ogTitle
						? pageHead.ogTitle
						: locale === "cy" && settings.facebookCard.cy.title
						? settings.facebookCard.cy.title
						: settings.facebookCard.en.title
				}
			/>
			<meta
				property="og:description"
				content={
					pageHead && pageHead.ogDescription
						? pageHead.ogDescription
						: locale === "cy" && settings.facebookCard.cy.description
						? settings.facebookCard.cy.description
						: settings.facebookCard.en.description
				}
			/>
			<meta
				property="og:url"
				content={
					pageHead && pageHead.ogURL
						? pageHead.ogURL
						: locale === "cy" && settings.meta.cy.canonicalURL
						? settings.meta.cy.canonicalURL
						: settings.meta.en.canonicalURL
				}
			/>
			<meta
				property="og:image"
				content={urlFor(
					pageHead && pageHead.ogImage
						? pageHead.ogImage
						: locale === "cy" && settings.facebookCard.cy.image
						? settings.facebookCard.cy.image
						: settings.facebookCard.en.image
				)
					.auto("format")
					.width(1200)
					.height(630)
					.quality(100)
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
				content={
					pageHead && pageHead.twitterTitle
						? pageHead.twitterTitle
						: locale === "cy" && settings.twitterCard.cy.title
						? settings.twitterCard.cy.title
						: settings.twitterCard.en.title
				}
			/>
			<meta
				name="twitter:description"
				content={
					pageHead && pageHead.twitterDescription
						? pageHead.twitterDescription
						: locale === "cy" && settings.twitterCard.cy.description
						? settings.twitterCard.cy.description
						: settings.twitterCard.en.description
				}
			/>
			<meta
				name="twitter:site"
				content={
					pageHead && pageHead.ogURL
						? pageHead.ogURL
						: locale === "cy" && settings.meta.cy.canonicalURL
						? settings.meta.cy.canonicalURL
						: settings.meta.en.canonicalURL
				}
			/>
			<meta
				name="twitter:image"
				content={urlFor(
					pageHead && pageHead.twitterImage
						? pageHead.twitterImage
						: locale === "cy" && settings.twitterCard.cy.image
						? settings.twitterCard.cy.image
						: settings.twitterCard.en.image
				)
					.auto("format")
					.width(1200)
					.height(628)
					.quality(100)
					.url()}
			/>
			<meta name="twitter:creator" content="@artsed_wales" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
		</Head>
	)
}
