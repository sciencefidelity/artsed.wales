export default {
  name: 'social',
  title: 'Social Links',
  type: 'document',
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
      name: 'site',
      title: 'site',
      type: 'string'
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'localeURL'
    }
  ],

  preview: {
    select: {
      title: 'site',
      username: 'username',
      link: 'link'
    },
    prepare(selection: any) {
      const { title, username, link } = selection
      return {
        title: title,
        subtitle: `${username ? username : link.en}`
      }
    }
  }
}
