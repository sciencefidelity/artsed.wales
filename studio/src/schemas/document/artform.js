import { MdOutlinePalette } from 'react-icons/md'

export default {
  name: 'artform',
  title: 'Artform',
  type: 'document',
  icon: MdOutlinePalette,
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
      type: 'localeString'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96
      }
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'title.cy'
    }
  }
}
