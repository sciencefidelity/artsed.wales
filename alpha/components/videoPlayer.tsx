import SanityMuxPlayer from "sanity-mux-player"
import { urlFor } from "lib/utils"
import { Video } from "lib/interfaces"

interface Props {
  video: Video
}

export function VideoPlayer({ video }: Props) {
  return (
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
  )
}
