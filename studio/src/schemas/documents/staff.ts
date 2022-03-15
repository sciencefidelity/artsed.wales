import { RiTeamLine } from 'react-icons/ri'

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  icon: RiTeamLine,
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
      type: 'localeRichText'
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
      type: 'localeSlugNames',
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
