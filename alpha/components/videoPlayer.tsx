import { FC } from "react"
import SanityMuxPlayer from "sanity-mux-player"
import { urlFor } from "lib/utils"
import { Video } from "lib/interfaces"

interface Props { video: Video }

export const VideoPlayer: FC<Props> = ({ video }) => {
  return (
    <SanityMuxPlayer
      assetDocument={video.asset}
      autoload={true}
      autoplay={false}
      showControls={true}
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
