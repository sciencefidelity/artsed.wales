import { Clipboard } from '../../components/twemoji'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: Clipboard,
  fields: [
    {
      name: 'photograpy',
      title: 'Photography',
      type: 'array',
      of: [
        {
          name: 'photograpy',
          title: 'Photography',
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'localeText'
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
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: subtitle,
                media: Clipboard
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'cite',
      subtitle: 'organisation.en'
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
        media: Clipboard
      }
    }
  }
}
