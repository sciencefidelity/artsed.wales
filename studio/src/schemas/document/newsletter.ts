import moment from 'moment'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Newspaper } from '../../components/twemoji'

export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  icon: Newspaper,
  i18n: {
    base: 'en',
    languages: [
      {
        title: 'English',
        id: 'en'
      },
      {
        title: 'Welsh',
        id: 'cy'
      }
    ]
  },
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: []
  },
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
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: '_createdAt',
      media: 'mainImage'
    },
    prepare(selection) {
      const { media, subtitle, title } = selection
      return {
        title: title,
        subtitle: moment(subtitle).format('D MMM YYYY'),
        media: media
      }
    }
  }
}
