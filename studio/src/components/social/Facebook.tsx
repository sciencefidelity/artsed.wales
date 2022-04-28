import React from "react"
import { urlFor } from '../../lib/utils'
import {
  FacebookLogo,
  HeartIcon,
  ThumbIcon
} from "./FacebookIcons"
import s from "./Facebook.module.css"
import u from "./Seo.module.css"

const Facebook = ({ document }) => {
  const url = document.displayed.__i18n_lang === "cy" ?
    "celfadd.cymru" :
    "artsed.wales"
  const canonical = (`${url}/`).replace(/https:\/\//, "").replace(/\/$/, "")
  let facebookTitle = "(untitled)"
  if (document.displayed.title) facebookTitle = document.displayed.title
  if (document.displayed.facebook && document.displayed.facebook.title) {
    facebookTitle = document.displayed.facebook.title
  }
  let facebookDescription = ""
  if (document.displayed.body) {
    facebookDescription = document.displayed.body[0].children[0].text
  }
  if (document.displayed.settings && document.displayed.settings.excerpt) {
    facebookDescription = document.displayed.settings.excerpt
  }
  if (document.displayed.facebook && document.displayed.facebook.description) {
    facebookDescription = document.displayed.facebook.description
  }
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.ogContainer}>
          <div className={`${u.flex} ${u.ma3} ${u.mb2}`}>
            <span>
              <FacebookLogo />
            </span>
            <div>
              <div className={s.ogTitle}>NAEN &bull; RCCA</div>
              <div className={s.ogTime}>12 hrs</div>
            </div>
          </div>
          <div className={`${u.flex} ${u.flexColumn} ${u.ma3} ${u.mt2}`}>
            <span className={`${s.ogDesc} ${u.w100} ${u.mb2}`}></span>
            <span className={`${s.ogDesc} ${u.w60}`}></span>
          </div>
          <div className={s.ogPreview}>
            <div className={s.ogPreviewImage}>
              {document.displayed.facebook.image && <img
                src={urlFor(document.displayed.facebook.image)
                  .auto('format')
                  .width(952)
                  .height(496)
                  .quality(100)
                  .url()}
                alt=""
              />}
            </div>
            <div className={s.ogPreviewBookmark}>
              <div className={s.ogPreviewContent}>
                <div className={s.ogPreviewMeta}>{canonical}</div>
                <div className={s.ogPreviewTitle}>{facebookTitle}</div>
                <div className={s.ogPreviewDesc}>{facebookDescription}</div>
              </div>
            </div>
          </div>
          <div className={s.ogReactions}>
            <span className={s.ogLikes}>
              <ThumbIcon />
              <HeartIcon />
              182
            </span>
            <span className={s.ogComments}>7 comments</span>
            <span className={`${s.ogComments} ${u.ml2}`}>2 shares</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Facebook
