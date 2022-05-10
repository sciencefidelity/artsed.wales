import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { FilmProjector } from '../../components/twemoji'

export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: FilmProjector,
  i18n,
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: []
  },
  groups: [
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'meta',
      title: 'Meta data'
    },
    {
      name: 'twitter',
      title: 'Twitter'
    },
    {
      name: 'facebook',
      title: 'Facebook'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content'
    },
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video',
      group: 'content'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'content'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      },
      group: 'content'
    },
    {
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      options: {
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      initialValue: new Date().toISOString(),
      group: 'content'
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitter',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebook',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
