import { FC, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { urlFor } from "lib/utils"
import { Video } from "lib/interfaces"
import s from "styles/index.module.scss"
import u from "styles/utils.module.scss"

interface Props { video: Video }

export const VideoPlayer: FC<Props> = ({ video }) => {
  const [isSSR, setIsSSR] = useState(true)
  useEffect(() => { setIsSSR(false) }, [])
  return (
    <div className={`${s.video}`}>
      {isSSR ? null : <ReactPlayer
        url={video.videoLink}
        width={"100%"}
        height={"auto"}
        light={urlFor(video.mainImage)
          .auto("format")
          .width(960)
          .height(540)
          .quality(85)
          .url()}
        playIcon={<div style={{
          width: "10%",
          height: "11%",
          backgroundColor: "#09ADEF",
          borderRadius: "0.3em",
          position: "relative",
          transform: "translate(-430%, 380%)"
        }}>
          <svg
            viewBox="0 0 20 20"
            style={{
              position: "absolute",
              height: "50%",
              top: "26%",
              left: "37%"
            }}
          ><polygon fill="white" points="1,0 20,10 1,20"></polygon></svg>
        </div>}
        style={{
          aspectRatio: "16 / 9"
        }}
      />}
      <div className={`${s.caption} ${u.sans} ${u.uppercase}`}>
        {video.title}
      </div>
    </div>
  )
}
