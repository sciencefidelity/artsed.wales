import { CameraFlash } from '../../components/twemoji'

export default {
  name: 'photography',
  title: 'Photography',
  type: 'document',
  icon: CameraFlash,
  fields: [
    {
      name: 'photograpy',
      title: 'Photography',
      type: 'array',
      of: [
        {
          name: 'photograpy',
          title: 'Photography',
          type: 'object',
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
            }
          ],
          preview: {
            select: {
              title: 'title.en',
              media: 'image'
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'Photography'
    },
    prepare({ title }) {
      return {
        title: title,
        media: CameraFlash
      }
    }
  }
}
