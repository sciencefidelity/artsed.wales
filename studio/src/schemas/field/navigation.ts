import { Compass } from '../../components/twemoji'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Compass,
  groups: [
    {
      name: 'primary',
      title: 'Primary navigation'
    },
    {
      name: 'secondary',
      title: 'Secondary navigation'
    }
  ],
  fields: [
    {
      name: 'primary',
      title: 'Primary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'localeString'
            },
            {
              name: 'url',
              type: 'reference',
              to: [
                { type: 'artform' },
                { type: 'event' },
                { type: 'keystage' },
                { type: 'newsletter' },
                { type: 'page' },
                { type: 'staff' },
                { type: 'tag' },
                { type: 'video' }
              ]
            }
          ],
          preview: {
            select: {
              title: 'label.en',
              subtitle: 'label.cy'
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: subtitle,
                media: Compass
              }
            }
          }
        }
      ],
      sortable: true,
      group: 'primary'
    },
    {
      name: 'secondary',
      title: 'Secondary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'localeString'
            },
            {
              name: 'url',
              type: 'reference',
              to: [
                { type: 'artform' },
                { type: 'event' },
                { type: 'keystage' },
                { type: 'newsletter' },
                { type: 'page' },
                { type: 'staff' },
                { type: 'tag' },
                { type: 'video' }
              ]
            }
          ],
          preview: {
            select: {
              title: 'label.en',
              subtitle: 'label.cy'
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: subtitle,
                media: Compass
              }
            }
          }
        }
      ],
      sortable: true,
      group: 'secondary'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare: () => {
      return {
        title: 'Navigation'
      }
    }
  }
}
