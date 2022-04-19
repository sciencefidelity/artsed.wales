import { FaRegImage } from 'react-icons/fa'

export default {
  name: 'imageCaption',
  type: 'object',
  title: 'Image',
  icon: FaRegImage,
  fields: [
    {
      name: 'image',
      title: 'Image Group',
      type: 'image'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    }
  ]
}
