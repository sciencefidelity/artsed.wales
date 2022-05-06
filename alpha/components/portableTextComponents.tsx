import { Fragment } from "react"
import { PortableTextComponents } from "@portabletext/react"
import { buildUrl, urlFor } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Image } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/component.module.scss"

export const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target} rel={target === "_blank" ? "noreferrer" : undefined}
        >{children}</a>
      )
    },
    internalLink: ({value, children}) => {
      const url = buildUrl(value.item._type, value.item.slug.en.current)
      return (
        <LinkTo href={url}>{children}</LinkTo>
      )
    }
  },
  types: {
    imageGroup: ({ value }) => {
      return (
        <div
          className={`${u.grid} ${s.imageContainer}`}
          style={{ gridTemplateColumns: `repeat(${value.images.length}, 1fr)` }}
        >
          {value.images.map((image: Image) => (
            <Fragment key={image._key}>
              <img
                src={urlFor(image)
                  .auto("format")
                  .width(710)
                  .quality(85)
                  .url()}
                alt=""
                className={`${s.image}`}
                loading="lazy"
              />
            </Fragment>
          ))}
        </div>
      )
    },
  }
}
