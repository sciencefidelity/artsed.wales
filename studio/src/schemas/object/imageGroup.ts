import { FaRegImages } from 'react-icons/fa'

export default {
  name: 'imageGroup',
  type: 'object',
  title: 'Image Group',
  icon: FaRegImages,
  fields: [
    {
      name: 'image',
      title: 'Image Group',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}
