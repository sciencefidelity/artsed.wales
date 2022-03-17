import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { WomanTeacher } from '../../components/twemoji'

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  icon: WomanTeacher,
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
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          { title: 'Author', value: 'author' },
          { title: 'Chair', value: 'chair' },
          { title: 'Co-ordinator', value: 'coordinator' },
          { title: 'Facilitator', value: 'facilitator' },
          { title: 'Trustee', value: 'trustee' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'job',
      title: 'Job',
      type: 'string'
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
        maxLength: 96,
        isUnique: isUniqueLocale
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'job',
      media: 'avatar'
    }
  }
}
