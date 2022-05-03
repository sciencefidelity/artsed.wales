import { Rule } from "@sanity/types"
import moment from 'moment'
import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Date } from '../../components/twemoji'

interface Selection {
  subtitle: string
  title: string
  media: string
}

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
    },
    {
      name: 'design',
      title: 'Design'
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
      name: 'longTitle',
      title: 'Long title',
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
      validation: (Rule: Rule) => Rule.max(140).warning('Max 140 characters.'),
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      initialValue: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Summary'
            }
          ],
          markDefs: [],
          style: 'h2'
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'This one day training session...'
            }
          ],
          markDefs: [],
          style: 'normal'
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'By the end of the course participants will...'
            }
          ],
          markDefs: [],
          style: 'h4'
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '...'
            }
          ],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal'
        }
      ],
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
            filter: ({ document }) => {
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
            filter: ({ document }) => {
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
            filter: ({ document }) => {
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
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      group: 'design'
    },
    {
      name: 'imageOne',
      title: 'Hero one',
      type: 'image',
      description: 'Cutout image for animation',
      group: 'design'
    },
    {
      name: 'classOne',
      title: 'Image class one',
      type: 'string',
      group: 'design'
    },
    {
      name: 'imageTwo',
      title: 'Hero two',
      type: 'image',
      description: 'Cutout image for animation',
      group: 'design'
    },
    {
      name: 'classTwo',
      title: 'Image class two',
      type: 'string',
      group: 'design'
    },
    {
      name: 'imageThree',
      title: 'Hero three',
      type: 'image',
      description: 'Cutout image for animation',
      group: 'design'
    },
    {
      name: 'classThree',
      title: 'Image class three',
      type: 'string',
      group: 'design'
    },
    {
      name: 'pattern',
      title: 'Pattern class',
      type: 'string',
      group: 'design'
    },
    {
      name: 'shapeOne',
      title: 'Shape one',
      type: 'string',
      group: 'design'
    },
    {
      name: 'shapeTwo',
      title: 'Shape two',
      type: 'string',
      group: 'design'
    },
    {
      name: 'shapeThree',
      title: 'Shape three',
      type: 'string',
      group: 'design'
    },
    {
      name: 'feature',
      title: 'Feature this post',
      type: 'boolean',
      group: 'settings',
      initialValue: false
    }
  ],
  orderings: [
    {
      title: 'Start Date',
      name: 'dateStart',
      by: [{ field: 'dateStart', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'dateStart',
      media: 'mainImage'
    },
    prepare(selection: Selection) {
      const { subtitle, title, media } = selection
      return {
        title: title,
        subtitle: `${
          subtitle ? moment(subtitle).format('ddd Do MMM YYYY') : 'TBA'
        }`,
        media: media
      }
    }
  }
}
