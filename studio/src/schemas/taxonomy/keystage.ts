import { MdOutlineVpnKey } from 'react-icons/md'

export default {
  name: 'keystage',
  title: 'Key Stage',
  type: 'document',
  icon: MdOutlineVpnKey,
  i18n: {
    languages: [
      {
        title: 'Multi-language',
        id: 'ml'
      }
    ]
  },
  initialValue: {
    __i18n_lang: null,
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
        source: 'title',
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
