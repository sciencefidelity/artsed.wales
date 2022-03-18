import moment from 'moment'
import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Date } from '../../components/twemoji'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: Date,
  i18n,
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: []
  },
  groups: [
    {
      name: 'basicInfo',
      title: 'Basic'
    },
    {
      name: 'content',
      title: 'Content'
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
      group: 'basicInfo'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'basicInfo'
    },
    {
      name: 'dateStart',
      title: 'Event starts',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        timeStep: 30
      },
      group: 'basicInfo'
    },
    {
      name: 'dateEnd',
      title: 'Event ends',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        timeStep: 30
      },
      group: 'basicInfo'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'basicInfo'
    },
    // TODO: keywords / tags
    {
      name: 'mainImage',
      title: 'Main event image',
      type: 'image',
      description: 'Ideal image size for Eventbrite – 2160 x 1080 / 2:1 ratio',
      options: {
        hotspot: true
      },
      group: 'content'
    },
    {
      name: 'imageData',
      title: 'Image data',
      type: 'imageData',
      group: 'content'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(140).warning("Max 140 characters."),
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
      group: 'settings'
    },
    {
      name: 'britelink',
      title: 'Eventbrite link',
      type: 'url',
      group: 'settings'
    },
    {
      name: 'facilitators',
      title: 'Facilitators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'staff' },
          options: {
            filter: ({document}) => {
              const { __i18n_lang } = document
              return {
                filter: `__i18n_lang == "${__i18n_lang}" && "facilitator" in role`
              }
            }
          }
        }
      ],
      group: 'settings'
    },
    {
      name: 'artform',
      title: 'Artforms',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'artform' },
          options: {
            filter: ({document}) => {
              const { __i18n_lang } = document
              return {
                filter: `__i18n_lang == '${__i18n_lang}'`
              }
            }
          }
        }
      ],
      group: 'settings'
    },
    {
      name: 'keystage',
      title: 'Key Stage',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'keystage' },
          options: {
            filter: ({document}) => {
              const { __i18n_lang } = document
              return {
                filter: `__i18n_lang == '${__i18n_lang}'`
              }
            }
          }
        }
      ],
      group: 'settings'
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'dateStart',
      media: 'mainImage'
    },
    prepare(selection) {
      const { subtitle, title, media } = selection
      return {
        title: title,
        subtitle: `${subtitle
          ? moment(subtitle).format('ddd Do MMM YYYY')
          : "TBA"}`,
        media: media
      }
    }
  }
}
