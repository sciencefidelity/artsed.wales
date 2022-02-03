import { supportedLanguages } from '../languages'
import moment from 'moment'

interface Selection {
  subtitle: string
  title: string
  media: string
}

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
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
      type: 'localeString',
      group: 'content'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeString',
      group: 'content'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: `title.${supportedLanguages[0].name}`,
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
      type: 'url',
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeMarkdown',
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
      type: 'localeString',
      group: 'content'
    },
    {
      name: 'facilitators',
      title: 'Facilitators',
      type: 'array',
      of: [{type: 'reference', to: {type: 'facilitator'}}],
      group: 'taxonomy'
    },
    {
      name: 'artform',
      title: 'Artforms',
      type: 'array',
      of: [{type: 'reference', to: {type: 'artform'}}],
      group: 'taxonomy'
    },
    {
      name: 'keystage',
      title: 'Key Stage',
      type: 'array',
      of: [{type: 'reference', to: {type: 'keystage'}}],
      group: 'taxonomy'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      description: 'Displayed on Facebook and Twitter shares (max 60 characters)',
      type: 'localeString',
      group: 'seo'
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description: 'Displayed on Facebook and Twitter shares (max 65 characters)',
      type: 'localeString',
      group: 'seo'
    },
    {
      name: 'ogImage',
      title: 'Social image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'content'
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'date',
      media: 'mainImage'
    },
    prepare(selection: Selection) {
      const {subtitle, title, media} = selection
      return {
        title: title,
        subtitle: `${moment(subtitle).format('ddd Do MMM YYYY')}`,
        media: media
      }
    }
  }
}
