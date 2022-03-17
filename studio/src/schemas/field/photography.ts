import { CameraFlash } from '../../components/twemoji'
// import { RiCamera3Line } from 'react-icons/ri'

export default {
  name: 'photography',
  title: 'Photography',
  type: 'document',
  icon: CameraFlash,
  i18n: {
    languages: [
      {
        title: 'fields',
        id: 'ft'
      }
    ]
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'hero',
      title: 'Hero Image',
      type: 'boolean'
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'image'
    }
  }
}
