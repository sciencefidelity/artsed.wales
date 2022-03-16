import moment from 'moment'
import { RiCalendarEventLine } from 'react-icons/ri'

interface Selection {
  subtitle: string
  title: string
  media: string
}

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: RiCalendarEventLine,
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
  groups: [
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'taxonomy',
      title: 'Taxonomoy'
    },
    {
      name: 'seo',
      title: 'SEO'
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'content'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      group: 'content'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'content'
    },
    {
      name: 'date',
      title: 'Date and Time',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      group: 'content'
    },
    {
      name: 'date2',
      title: 'Second Date and Time',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      group: 'content'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'content'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'content'
    },
    {
      name: 'britelink',
      title: 'Eventbrite link',
      type: 'localeURL',
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
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
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'string',
      group: 'content'
    },
    {
      name: 'facilitators',
      title: 'Facilitators',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'staff' } }],
      group: 'taxonomy'
    },
    {
      name: 'artform',
      title: 'Artforms',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'artform' } }],
      group: 'taxonomy'
    },
    {
      name: 'keystage',
      title: 'Key Stage',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'keystage' } }],
      group: 'taxonomy'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters)',
      type: 'string',
      group: 'seo'
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters)',
      type: 'string',
      group: 'seo'
    },
    {
      name: 'ogImage',
      title: 'Social image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'seo'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'mainImage'
    },
    prepare(selection: Selection) {
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
