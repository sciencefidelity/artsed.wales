export default {
  name: 'localeMeta',
  title: 'Localized Meta Data',
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
      type: 'metaData'
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'metaData'
    }
  ]
}
