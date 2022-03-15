import React from 'react'
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
  icon: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 6V5h-3v2h-2V5H9v2H7V5H4v4h16zm0 2H4v8h16v-8zM6 13h5v4H6v-4z"></path>
      </g>
    </svg>
  ),
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
      type: 'localeSlug',
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
      type: 'localeString',
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
      type: 'localeRichText',
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
      of: [{ type: 'reference', to: { type: 'facilitator' } }],
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
      type: 'localeString',
      group: 'seo'
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters)',
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
      group: 'seo'
    }
  ],

  preview: {
    select: {
      title: 'title.en',
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
