export default {
  name: 'pageSettings',
  type: 'object',
  fields: [
    {
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      options: {
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tag' },
          options: {
            filter: ({document}) => {
              const { __i18n_lang } = document
              return {
                filter: `__i18n_lang == "${__i18n_lang}"`
              }
            }
          }
        }
      ]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        { type: 'reference',
          to: { type: 'staff' },
          options: {
            filter: ({document}) => {
              const { __i18n_lang } = document
              return {
                filter: `__i18n_lang == "${__i18n_lang}" && "author" in role`
              }
            }
          }
        }
      ]
    }
  ],
  options: {
    collapsible: true,
    collapsed: false
  }
}
