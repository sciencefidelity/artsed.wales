/**
 * Post component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/post`.
 *
 * @param data - all props fetched with `postQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `postPathQuery` in `lib/queries.ts`.
 */
import { Fragment } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { SanityImage } from "components/image"
import { PostDate } from "components/date"
import { Layout } from "components/layout"
import { LinkTo } from "components/linkTo"
import { ErrorTemplate } from "components/errorTemplate"
import Sidebar from "components/sidebar"
import { postQuery, postPathQuery } from "lib/queries"
import {
	Company,
	Event,
	Label,
	Navigation,
	Path,
	Post,
	Settings
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/post.module.scss"

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const paths = await sanityClient.fetch(postPathQuery)
	const pathsWithLocales = paths.flatMap((path: Path) => {
		return locales.map(locale => ({ ...path, locale }))
	})
	return {
		paths: pathsWithLocales,
		fallback: false
	}
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params
	const data = await sanityClient.fetch(postQuery, { slug })
	return {
		props: {
			data
		}
	}
}

const PostPage = ({ data }) => {
	const router = useRouter()
	const { locale } = router
	if (router.isFallback) {
		return <ErrorTemplate />
	}
	if (!data) {
		return (
			<>
				<Head>
					<meta name="robots" content="noindex" />
				</Head>
				<ErrorTemplate />
			</>
		)
	}
	const { company, events, labels, navigation, post, settings } = data as {
		company: Company
		events: Event[]
		labels: Label[]
		navigation: Navigation
		post: Post
		settings: Settings
	}

	const pageHead = {
		title:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.meta?.title
				: post.meta?.title,
		description:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.meta?.description
				: post.meta?.description,
		ogTitle:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.facebook?.title
				: post.facebook?.title,
		ogDescription:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.facebook?.description
				: post.facebook?.description,
		ogURL:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.meta?.canonicalURL
				: post.meta?.canonicalURL,
		ogImage:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.facebook?.image
				: post.facebook?.image,
		twitterTitle:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.twitter?.title
				: post.twitter?.title,
		twitterDescription:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.twitter?.description
				: post.twitter?.description,
		twitterImage:
			locale === "cy" && post.__i18n_refs
				? post.__i18n_refs.twitter?.image
				: post.twitter?.image
	}

	return (
		<Layout
			company={company}
			labels={labels}
			navigation={navigation}
			pageHead={pageHead}
			settings={settings}
		>
			<div className={`${s.hero}`}>
				{post.image && (
					<SanityImage image={post.image} alt={post.title} lazy={false} />
				)}
			</div>
			<div className={`${u.container}`}>
				<div className={`${s.post} ${u.grid}`}>
					<section className={`${s.content}`}>
						{post.settings.tags && (
							<ul className={`${u.uppercase} ${s.tags}`}>
								{post.settings.tags.map(tag => (
									<Fragment key={tag._id}>
										<li className={`${u.horizontalList}`}>{tag.title}</li>
									</Fragment>
								))}
							</ul>
						)}
						{post.title && (
							<h1 className={`${s.h1} ${u.mono} ${u.bold}`}>
								{locale === "cy" && post.__i18n_refs
									? post.__i18n_refs.title
									: post.title}
							</h1>
						)}
						{post.settings.publishedAt && (
							<div className={`${s.date}`}>
								Published on <PostDate date={post.settings.publishedAt} />
							</div>
						)}
						{post.settings.authors && (
							<ul className={`${s.authors}`}>
								By{" "}
								{post.settings.authors.map(author => (
									<Fragment key={author._id}>
										<LinkTo href={author.slug}>
											<li className={`${u.horizontalList}`}>{author.title}</li>
										</LinkTo>
									</Fragment>
								))}
							</ul>
						)}
						{post.body && (
							<PortableText
								value={
									locale === "cy" && post.__i18n_refs
										? post.__i18n_refs.body
										: post.body
								}
								components={components}
							/>
						)}
					</section>
					<hr className={`${s.hr}`} />
					<Sidebar events={events} title={labels[10].text} />
				</div>
				<hr />
			</div>
		</Layout>
	)
}
export default PostPage
