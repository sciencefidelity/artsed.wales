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
              type: 'string',
              title: 'Label'
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
          ]
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
            { name: 'label', type: 'string', title: 'Label' },
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
          ]
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
