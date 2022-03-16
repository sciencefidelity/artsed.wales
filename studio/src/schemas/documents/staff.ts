import { RiTeamLine } from 'react-icons/ri'

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  icon: RiTeamLine,
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
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: [
          { title: 'Author', value: 'author' },
          { title: 'Chair', value: 'chair' },
          { title: 'Co-ordinator', value: 'coordinator' },
          { title: 'Facilitator', value: 'facilitator' },
          { title: 'Trustee', value: 'trustee' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'job',
      title: 'Job',
      type: 'localeString'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
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
      title: 'name',
      subtitle: 'job.en',
      media: 'avatar'
    }
  }
}
