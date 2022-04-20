import React from 'react'
import { urlFor } from '../lib/utils'

const ImageGroupPreview = ({ value }) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '0.3rem',
        gridTemplateColumns: `repeat(${value.images.length}, 1fr)`
      }}
    >
      {value.images.map((image, idx) =>
        <img
          src={urlFor(image)
            .auto('format')
            .width(200)
            .quality(80)
            .url()}
          alt=""
          key={idx}
          style={{width: '100%'}}
        />
      )}
    </div>
  )
}
export default ImageGroupPreview
