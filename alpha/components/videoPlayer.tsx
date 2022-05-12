import { FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import SanityMuxPlayer from "sanity-mux-player"
import { urlFor } from "lib/utils"
import { Video } from "lib/interfaces"
import s from "styles/index.module.scss"
import u from "styles/utils.module.scss"

interface Props { video: Video }

export const VideoPlayer: FC<Props> = ({ video }) => {
  console.log(video.asset)
  const [isSSR, setIsSSR] = useState(true)
  const { locale } = useRouter()
  useEffect(() => { setIsSSR(false) }, [])
  return (
    <div className={`${s.video}`}>
      <SanityMuxPlayer
        assetDocument={video.asset}
        autoload={true}
        autoplay={false}
        showControls={true}
        muted={false}
        loop={false}
      />
      <div className={`${s.caption} ${u.sans} ${u.uppercase}`}>
        {locale === "cy" && video.__i18n_refs
          ? video.__i18n_refs.title : video.title}
      </div>
    </div>
  )
}
