import { Fragment, ReactNode } from "react"
import {
  PortableTextComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react"
import { buildURL, urlFor } from "lib/utils"
import { LinkTo } from "components/linkTo"
import { Image } from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/component.module.scss"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props extends PortableTextMarkComponentProps<any> {
  value: {
    blank: boolean
    href: string
    item: {
      _type: string
      slug: {
        en: {
          current: string
        }
        cy: {
          current: string
        }
      }
    }
    images: Image[]
  }
  children: ReactNode
}

export const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }: Partial<Props>) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noreferrer" : undefined}
        >
          {children}
        </a>
      )
    },
    internalLink: ({ value, children }: Partial<Props>) => {
      const url = buildURL(
        value?.item._type ?? "",
        value?.item.slug.en.current ?? ""
      )
      return <LinkTo href={url}>{children}</LinkTo>
    },
  },
  types: {
    imageGroup: ({ value }: Partial<Props>) => (
      <div
        className={`${u.grid} ${s.imageContainer}`}
        style={{
          gridTemplateColumns: `repeat(${value?.images.length ?? 0}, 1fr)`,
        }}
      >
        {value?.images.map((image: Image) => (
          <Fragment key={image._key}>
            <img
              src={urlFor(image).auto("format").width(710).quality(85).url()}
              alt=""
              className={`${s.image}`}
              loading="lazy"
            />
          </Fragment>
        ))}
      </div>
    ),
  },
}
