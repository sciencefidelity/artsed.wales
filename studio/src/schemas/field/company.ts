import { PostOffice } from '../../components/twemoji'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: PostOffice,
  // i18n: {
  //   languages: [
  //     {
  //       title: 'fields',
  //       id: 'ft'
  //     }
  //   ]
  // },
  groups: [
    {
      name: 'meta',
      title: 'Meta'
    },
    {
      name: 'seo',
      title: 'SEO'
    },
    {
      name: 'footer',
      title: 'Footer'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Company name',
      type: 'localeString'
    },
    {
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'localeString',
    },
    {
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'localeString',
    },
    {
      name: 'city',
      title: 'City',
      type: 'localeString',
    },
    {
      name: 'postcode',
      title: 'Postcode',
      type: 'localeString',
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
      group: 'footer'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'localeEmail',
      group: 'footer'
    }
  ],
  preview: {
    select: {
      title: 'siteName.en',
      subtitle: 'siteName.cy',
      media: 'seoImage'
    }
  }
}
