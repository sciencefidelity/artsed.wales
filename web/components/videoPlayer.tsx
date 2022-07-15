import { useRouter } from "next/router"
import SanityMuxPlayer from "sanity-mux-player"
import { urlFor } from "lib/utils"
import { Video } from "lib/interfaces"
import s from "styles/index.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  video: Video
}

export function VideoPlayer({ video }: Props) {
  const { locale } = useRouter()
  return (
    <div className={`${s.video}`}>
      <SanityMuxPlayer
        assetDocument={video.asset}
        autoload
        autoplay={false}
        showControls
        muted={false}
        loop={false}
        poster={urlFor(video.mainImage)
          .auto("format")
          .width(960)
          .height(540)
          .quality(85)
          .url()}
      />
      <div className={`${s.caption} ${u.sans} ${u.uppercase}`}>
        {locale === "cy" && video.__i18n_refs
          ? video.__i18n_refs.title
          : video.title}
      </div>
    </div>
  )
}
