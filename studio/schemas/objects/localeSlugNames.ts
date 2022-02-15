import { supportedLanguages } from '../languages'

export default {
  name: 'localeSlugNames',
  title: 'Localized slugs for names',
  type: 'object',
  description: 'used when the source field is not localized',
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
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'slug',
      fieldset: 'translations',
      options: {
        source: 'name'
      }
    }
  ]
}
