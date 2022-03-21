import React from "react"
import { urlFor } from '../../lib/utils'
import {
  CommentIcon,
  LikeIcon,
  LinkIcon,
  RetweetIcon,
  ShareIcon,
  TwitterLogo
} from "./TwitterIcons"
import s from "./Twitter.module.css"
import u from "./Seo.module.css"

const Twitter = ({ document }) => {
  const url = document.displayed.__i18n_lang === "cy" ?
    "celfadd.cymru" :
    "artsed.wales"
  let canonical = ("https://artsed.wales/").replace(/\/$/, "")
  if (document.displayed.settings && document.displayed.settings.slug) {
    canonical = `${url}/${document.displayed.settings.slug}`
  }
  let twitterTitle = "(untitled)"
  if (document.displayed.title) twitterTitle = document.displayed.title
  if (document.displayed.twitter && document.displayed.twitter.title) {
    twitterTitle = document.displayed.twitter.title
  }
  let twitterDescription = ""
  if (document.displayed.body) {
    twitterDescription = document.displayed.body[0].children[0].text
  }
  if (document.displayed.settings && document.displayed.settings.excerpt) {
    twitterDescription = document.displayed.settings.excerpt
  }
  if (document.displayed.twitter && document.displayed.twitter.description) {
    twitterDescription = document.displayed.twitter.description
  }
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.twitterContainer}>
          <div className={`${u.flex} ${u.ma4}`}>
            <span>
              <TwitterLogo />
            </span>
            <div className={u.w100}>
              <span className={s.twitterTitle}>NAEN &bull; RCCA</span>
              {" "}
              <span className={s.twitterTime}>12 hrs</span>
              <div className={`${u.flex} ${u.flexColumn} ${u.mt2} ${u.mb3}`}>
                <span className={`${s.twitterDesc} ${u.w100} ${u.mb2}`}></span>
                <span className={`${s.twitterDesc} ${u.w60}`}></span>
              </div>
              <div className={s.twitterPostPreview}>
                <div className={s.twitterPreviewImage}>
                  <img
                    src={urlFor(document.displayed.mainImage)
                      .auto('format')
                      .width(507)
                      .height(266)
                      .quality(80)
                      .url()}
                    alt=""
                  />
                </div>
                <div className={s.twitterPreviewContent}>
                  <div className={s.twitterPreviewTitle}>{twitterTitle}</div>
                  <div className={s.twitterPreviewDesc}>{twitterDescription}</div>
                  <div className={s.twitterPreviewMeta}>
                    <LinkIcon />
                    {canonical}
                  </div>
                </div>
              </div>
              <div className={s.twitterReactions}>
                <div className={`${u.flex} ${s.itemsCenter}`}>
                  <CommentIcon />
                  2
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <RetweetIcon />
                  11
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <LikeIcon />
                  32
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Twitter
