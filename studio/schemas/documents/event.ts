import { supportedLanguages } from '../languages'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: `title.${supportedLanguages[0].name}`,
        maxLength: 96,
      },
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
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'britelink',
      title: 'Eventbrite link',
      type: 'url',
    },
    {
      name: 'artform',
      title: 'Artforms',
      type: 'array',
      of: [{type: 'reference', to: {type: 'artform'}}],
    },
    {
      name: 'keystage',
      title: 'Key Stage',
      type: 'array',
      of: [{type: 'reference', to: {type: 'keystage'}}],
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      description: 'Displayed on Facebook and Twitter shares (max 60 characters)',
      type: 'string',
      validation: Rule => Rule.max(60).warning(`Only 60 characters will be visible.`),
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description: 'Displayed on Facebook and Twitter shares (max 65 characters)',
      type: 'string',
      validation: Rule => Rule.max(65).warning(`Only 65 characters will be visible.`),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'captionImage',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'date',
      media: 'mainImage',
    },
  },
}
