import { GetStaticProps, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import { Icon } from "components/icons/icon"
import { Layout } from "components/layout"
import { PostDate } from "components/date"
// import { SanityImage } from "components/image"
import Sidebar from "components/sidebar"
import { VideoPlayer } from "components/videoPlayer"
import { videoQuery, videoPathQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Params,
  Path,
  Settings,
  Video,
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/video.module.scss"
import p from "styles/patterns.module.scss"

interface Data {
  company: Company
  events: Event[]
  labels: Label[]
  navigation: Navigation
  settings: Settings
  video: Video
}

export const getStaticPaths: GetStaticPaths = async ({
  locales = ["cy", "en"],
}) => {
  const paths: Path[] = await sanityClient.fetch(videoPathQuery)
  const pathsWithLocales = paths.flatMap((path: Path) =>
    locales.map((locale) => ({ ...path, locale }))
  )
  return {
    paths: pathsWithLocales,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as Params
  const data: Data = await sanityClient.fetch(videoQuery, { slug })
  return {
    props: {
      data,
    },
  }
}

/**
 * VideoPage (dynamic): pages generated for each video
 * @remarks Generates all pages in the subdirectory `/videos`
 * @param data - data from Sanity fetched with {@link videoQuery}
 */
const VideoPage = ({ data }: { data: Data }) => {
  const router = useRouter()
  const { locale = "en" } = router
  const { company, events, labels, navigation, settings, video } = data

  const pageHead = {
    title:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.meta?.title
        : video.meta?.title,
    description:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.meta?.description
        : video.meta?.description,
    ogTitle:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.facebook?.title
        : video.facebook?.title,
    ogDescription:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.facebook?.description
        : video.facebook?.description,
    ogURL:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.meta?.canonicalURL
        : video.meta?.canonicalURL,
    ogImage:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.facebook?.image
        : video.facebook?.image,
    twitterTitle:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.twitter?.title
        : video.twitter?.title,
    twitterDescription:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.twitter?.description
        : video.twitter?.description,
    twitterImage:
      locale === "cy" && video.__i18n_refs
        ? video.__i18n_refs.twitter?.image
        : video.twitter?.image,
  }
  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      pageHead={pageHead}
      settings={settings}
    >
      <div className={`${s.hero} ${p.cross}`}>
        <div className={`${s.heroContent} ${u.absolute}`}>
          <div>
            <div className={`${s.icon}`}>
              <Icon name="Icons" />
            </div>
            <h1
              className={`${s.title} ${u.mono}`}
              // TODO: make this less dangerous
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html:
                  locale === "cy" && video.__i18n_refs
                    ? video.__i18n_refs.title
                    : video.title,
              }}
            />
          </div>
        </div>
        {/* {video.mainImage && <SanityImage
          image={video.facebook.image}
          alt={video.title}
          lazy={false}
          saturation={-100}
        />} */}
      </div>
      <div className={`${u.container}`}>
        <div className={`${s.video} ${u.grid}`}>
          <div>
            <div className={`${s.videoPlayer}`}>
              <VideoPlayer video={video} />
            </div>
            <section className={`${s.content}`}>
              {video.publishedAt && (
                <div className={`${s.date}`}>
                  Published on <PostDate date={video.publishedAt} />
                </div>
              )}
              {video.body && (
                <PortableText
                  value={
                    locale === "cy" && video.__i18n_refs
                      ? video.__i18n_refs.body
                      : video.body
                  }
                  components={components}
                />
              )}
            </section>
          </div>
          <hr className={`${s.hr}`} />
          <Sidebar events={events} title={labels[10].text} />
        </div>
        <hr />
      </div>
    </Layout>
  )
}
export default VideoPage
