import * as React from 'react'
import { urlFor } from '../lib/utils'

const ImageCaptionPreview = ({ value }) => {
	return (
		<>
			<img
				src={urlFor(value.image).auto('format').width(600).quality(80).url()}
				alt=""
				style={{ width: '100%' }}
			/>
			<p>{value.caption}</p>
		</>
	)
}
export default ImageCaptionPreview
