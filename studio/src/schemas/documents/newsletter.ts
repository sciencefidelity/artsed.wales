import moment from 'moment'
import { RiNewspaperLine } from 'react-icons/ri'

interface Selection {
  media: string
  subtitle: string
  title: string
}

export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  icon: RiNewspaperLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'text',
      rows: 3
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: '_createdAt',
      media: 'mainImage'
    },
    prepare(selection: Selection) {
      const { media, subtitle, title } = selection
      return {
        title: title,
        subtitle: moment(subtitle).format('D MMM YYYY'),
        media: media
      }
    }
  }
}
