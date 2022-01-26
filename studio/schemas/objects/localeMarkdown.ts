export default {
  name: 'localeMarkdown',
  title: 'Localized Markdown',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations'
    }
  ],

  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'markdown'
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'markdown'
    }
  ]
}
