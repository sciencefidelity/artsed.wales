import React from 'react'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"></path>
    </svg>
  ),
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'localeRichText'
    },
    {
      name: 'cite',
      title: 'Citation',
      type: 'string',
      description: 'Who is the quote by?'
    },
    {
      name: 'organisation',
      title: 'Organisation',
      type: 'localeString',
      description: 'Where do they work?'
    }
  ],

  preview: {
    select: {
      title: 'cite',
      subtitle: 'organisation.en'
    }
  }
}