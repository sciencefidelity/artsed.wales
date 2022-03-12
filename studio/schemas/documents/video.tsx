import React from 'react'

export default {
  name: 'video',
  title: 'Video',
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
        <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 5v14h8V5H8zM4 5v2h2V5H4zm14 0v2h2V5h-2zM4 9v2h2V9H4zm14 0v2h2V9h-2zM4 13v2h2v-2H4zm14 0v2h2v-2h-2zM4 17v2h2v-2H4zm14 0v2h2v-2h-2z"></path>
      </g>
    </svg>
  ),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeRichText'
    },
    {
      name: 'videoLink',
      title: 'Video Link',
      type: 'url'
    },
    {
      name: 'publishDate',
      title: 'Publish date',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage'
    }
  }
}
