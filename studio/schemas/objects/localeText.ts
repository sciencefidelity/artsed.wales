export default {
  name: 'localeText',
  title: 'Localized text',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],

  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'text',
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'text',
      fieldset: 'translations',
    },
  ],
}
