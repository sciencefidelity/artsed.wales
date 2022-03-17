import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { ClosedLockWithKey } from '../../components/twemoji'

export default {
  name: 'keystage',
  title: 'Key Stage',
  type: 'document',
  icon: ClosedLockWithKey,
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
    },
    prepare({ title }) {
      return {
        title: title,
        media: ClosedLockWithKey
      }
    }
  }
}
