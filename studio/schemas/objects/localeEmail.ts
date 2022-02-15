import { StringValidation } from '../interfaces'

export default {
  name: 'localeEmail',
  title: 'Localized Email',
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
      type: 'string',
      validation: (Rule: StringValidation) =>
        Rule.regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).error('Not a valid email address')
    },
    {
      title: 'Welsh',
      name: 'cy',
      type: 'string',
      validation: (Rule: StringValidation) =>
        Rule.regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).error('Not a valid email address')
    }
  ]
}
