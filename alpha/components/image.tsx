import { FC } from "react"
import { urlFor } from "lib/utils"
import { Dimensions, Image } from "lib/interfaces"

interface Props {
  alt: string
  dimensions: Dimensions
  image: Image
  height?: number
  lazy?: boolean
  width?: number
}

/**
 * Sanity Image Component
 * @remarks a wrapper for `img` that uses the Sanity image API and hotspot
 * @param alt - the alt text for the image
 * @param image - the image object from the Sanity database
 * @param height - the height of the image
 * @param lazy - whether the image should be lazy loaded
 * @param width - the width of the image
 * @returns An image tag with Sanity formatted image URL
 */
export const SanityImage: FC<Props> = ({
  alt,
  dimensions,
  height = dimensions.height,
  image,
  lazy,
  width = dimensions.width,
}) => {
  const { hotspot } = image
  const position = hotspot
    ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
    : "50% 50%"
  return (
    <img
      src={urlFor(image)
        .auto("format")
        .width(width)
        .height(height)
        .quality(85)
        .url()}
      alt={alt}
      width={width}
      height={height}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        objectPosition: position,
      }}
      loading={lazy ? "lazy" : "eager"}
    />
  )
}

SanityImage.defaultProps = {
  height: undefined,
  lazy: false,
  width: undefined,
}
