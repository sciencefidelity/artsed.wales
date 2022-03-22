import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { WomanTeacher } from '../../components/twemoji'

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  icon: WomanTeacher,
  i18n,
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: []
  },
  groups: [
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'meta',
      title: 'Meta data'
    },
    {
      name: 'twitter',
      title: 'Twitter'
    },
    {
      name: 'facebook',
      title: 'Facebook'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
      group: 'content'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      },
      group: 'content'
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
      validation: Rule => Rule.required(),
      group: 'content'
    },
    {
      name: 'job',
      title: 'Job',
      type: 'string',
      group: 'content'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      group: 'content'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'content'
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitter',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebook',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
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
