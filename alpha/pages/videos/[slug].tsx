/**
 * Video component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/videos`.
 *
 * @param data - all props fetched with `videoQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `vidoePathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { ErrorTemplate } from "components/errorTemplate"
import { Layout } from "components/layout"
import { PostDate } from "components/date"
import { SanityImage } from "components/image"
import Sidebar from "components/sidebar"
import { VideoPlayer } from "components/videoPlayer"
import { videoQuery, videoPathQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Path,
  Settings,
  Video,
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/video.module.scss"

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = await sanityClient.fetch(videoPathQuery)
  const pathsWithLocales = paths.flatMap((path: Path) => {
    return locales.map(locale => ({...path, locale}) )
  })
  return {
    paths: pathsWithLocales,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(videoQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const VideoPage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
  if(router.isFallback) {
    return <ErrorTemplate />
  }
  if(!data) {
    return (<>
      <Head><meta name="robots" content="noindex" /></Head>
      <ErrorTemplate />
    </>)
  }
  const {
    company,
    events,
    labels,
    navigation,
    settings,
    video
  } = data as {
    company: Company
    events: Event[]
    labels: Label[]
    navigation: Navigation
    settings: Settings
    video: Video
  }

  const pageHead = {
    title: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.meta?.title
      : video.meta?.title,
    description: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.meta?.description
      : video.meta?.description,
    ogTitle: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.facebook?.title
      : video.facebook?.title,
    ogDescription: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.facebook?.description
      : video.facebook?.description,
    ogURL: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.meta?.canonicalURL
      : video.meta?.canonicalURL,
    ogImage: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.facebook?.image
      : video.facebook?.image,
    twitterTitle: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.twitter?.title
      : video.twitter?.title,
    twitterDescription: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.twitter?.description
      : video.twitter?.description,
    twitterImage: locale === "cy" && video.__i18n_refs
      ? video.__i18n_refs.twitter?.image
      : video.twitter?.image
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
        <div className={`${s.heroContent} ${u.absolute}`}>
          <h1
            className={`${s.title} ${u.mono}`}
            dangerouslySetInnerHTML={{
              __html: locale === "cy" && video.__i18n_refs
                ? video.__i18n_refs.title : video.title }}
          />
        </div>
        {video.mainImage && <SanityImage
          image={video.mainImage}
          alt={video.title}
          lazy={false}
          saturation={-100}
        />}
      </div>
      <div className={`${u.container}`}>
        <div className={`${s.video} ${u.grid} ${u.bold}`}>
          <section className={`${s.content}`}>
            <VideoPlayer video={video}/>
            {video.title &&
              <h1 className={`${s.h1} ${u.mono} ${u.bold}`}>
                {locale === "cy" && video.__i18n_refs
                  ? video.__i18n_refs.title : video.title}
              </h1>
            }
            {video.publishedAt && <div className={`${s.date}`}>
              Published on{" "}
              <PostDate date={video.publishedAt} />
            </div>}
            {video.body && <PortableText
              value={locale === "cy" && video.__i18n_refs
                ? video.__i18n_refs.body : video.body}
              components={components}
            />}
          </section>
          <hr className={`${s.hr}`} />
          <Sidebar events={events} title={labels[10].text} />
        </div>
        <hr />
      </div>
    </Layout>
  )
}
export default VideoPage
