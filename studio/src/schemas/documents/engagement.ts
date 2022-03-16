import { MdOutlineAutoGraph } from 'react-icons/md'

export default {
  name: 'engagement',
  title: 'Engagement',
  type: 'document',
  icon: MdOutlineAutoGraph,
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
      name: 'heading',
      title: 'Heading',
      type: 'localeString'
    },
    {
      name: 'count',
      title: 'Count',
      type: 'number'
    }
  ],

  preview: {
    select: {
      title: 'heading.en',
      subtitle: 'count'
    }
  }
}
