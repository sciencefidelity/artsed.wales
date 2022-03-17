import { Label } from '../components/twemoji'
// import { RiPriceTag3Line } from 'react-icons/ri'

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
      type: 'localeString'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString'
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
