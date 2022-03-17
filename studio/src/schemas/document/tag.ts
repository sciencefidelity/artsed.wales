import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Label } from '../../components/twemoji'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: Label,
  i18n: {
    base: 'en',
    languages: [
      {
        title: 'English',
        id: 'en'
      },
      {
        title: 'Welsh',
        id: 'cy'
      }
    ]
  },
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: []
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Should be written in singular',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
    prepare({ title }) {
      return {
        title: title,
        media: Label
      }
    }
  }
}
