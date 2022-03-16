import { MdOutlineFormatQuote } from 'react-icons/md'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: MdOutlineFormatQuote,
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
      name: 'quote',
      title: 'Quote',
      type: 'localeText'
    },
    {
      name: 'cite',
      title: 'Citation',
      type: 'string',
      description: 'Who is the quote by?'
    },
    {
      name: 'organisation',
      title: 'Organisation',
      type: 'localeString',
      description: 'Where do they work?'
    }
  ],

  preview: {
    select: {
      title: 'cite',
      subtitle: 'organisation.en'
    }
  }
}
