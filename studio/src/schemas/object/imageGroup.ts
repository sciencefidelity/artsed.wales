import { FaRegImages } from 'react-icons/fa'
import ImageGroupPreview from '../../components/ImageGroupPreview'

export default {
	name: 'imageGroup',
	type: 'object',
	title: 'Image Group',
	icon: FaRegImages,
	fields: [
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'image' }]
		}
	],
	preview: {
		select: {
			images: 'images'
		},
		component: ImageGroupPreview
	}
}
