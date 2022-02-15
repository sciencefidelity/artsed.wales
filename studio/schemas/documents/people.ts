export default {
  name: 'people',
  title: 'People',
  type: 'document',
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
          { title: 'Chair', value: 'chair' },
          { title: 'Trustee', value: 'trustee' },
          { title: 'Co-ordinator', value: 'coordinator' }
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
