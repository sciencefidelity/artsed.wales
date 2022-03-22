import moment from 'moment'
import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Newspaper } from '../../components/twemoji'
export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  icon: Newspaper,
  i18n,
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: [],
    publishedAt: new Date().toISOString()
  },
  groups: [
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'design',
      title: 'Design'
    },
    {
      name: 'settings',
      title: 'Settings'
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'content'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'text',
      rows: 3,
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
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'event' },
          options: {
            filter: ({ document }) => {
              const { __i18n_lang } = document
              return {
                filter: `__i18n_lang == "${__i18n_lang}"`
              }
            }
          }
        }
      ],
      group: 'design'
    },
    {
      name: 'social',
      title: 'Social links',
      type: 'array',
      of: [
        {
          name: 'socialLink',
          title: 'Social link',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Social network',
              type: 'string',
              options: {
                list: [
                  'facebook',
                  'instagram',
                  'linkedin',
                  'pinterest',
                  'twitter',
                  'youtube',
                  'website'
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'file'
            }
          ]
        }
      ]
    },
    {
      name: 'accent',
      title: 'Accent color',
      type: 'color',
      group: 'design'
    },
    {
      name: 'background',
      title: 'Background color',
      type: 'color',
      group: 'design'
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
      group: 'settings'
    },
    {
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      options: {
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      group: 'settings'
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
  orderings: [
    {
      title: 'Publish Date',
      name: 'publishedAt',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
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
