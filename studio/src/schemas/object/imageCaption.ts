import { FaRegImage } from 'react-icons/fa'
import ImageCaptionPreview from '../../components/ImageCaptionPreview'

export default {
  name: 'imageCaption',
  type: 'object',
  title: 'Image',
  icon: FaRegImage,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    }
  ],
  preview: {
    select: {
      image: 'image',
      caption: 'caption'
    },
    component: ImageCaptionPreview
  }
}
