import { PostOffice } from '../../components/twemoji'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: PostOffice,
  fields: [
    {
      name: 'title',
      title: 'Company name',
      type: 'localeString'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'localeAddress'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'localeEmail'
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title.en'
    },
    prepare({ title }) {
      return {
        title: title,
        media: PostOffice
      }
    }
  }
}
