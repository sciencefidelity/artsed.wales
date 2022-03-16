import { RiSettings2Line } from 'react-icons/ri'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: RiSettings2Line,
  i18n: {
    languages: [
      {
        id: 'ft'
      }
    ]
  },
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
      name: 'siteName',
      title: 'Site Name',
      type: 'localeString',
      group: 'meta'
    },
    {
      name: 'siteURL',
      title: 'Site URL',
      type: 'localeURL',
      group: 'meta'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'localeString',
      group: 'meta'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'localeString',
      description: 'A list of keywords seperated by commas.',
      group: 'meta'
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'localeString',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters).',
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'localeString',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters).',
      group: 'seo'
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      group: 'seo'
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      description: 'Ideal size 1200 x 630px.',
      options: {
        hotspot: true
      },
      group: 'seo'
    },
    {
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'localeString',
      group: 'footer'
    },
    {
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'localeString',
      group: 'footer'
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
    },
    {
      name: 'signUp',
      title: 'Sign Up Heading',
      type: 'localeString',
      group: 'footer'
    },
    {
      name: 'signUpText',
      title: 'Sign Up Text',
      type: 'localeString',
      group: 'footer'
    },
    {
      name: 'signUpPlaceholder',
      title: 'Sign Up Placeholder',
      description: 'One line only (ie Email address...)',
      type: 'localeString',
      group: 'footer'
    },
    // {
    //   name: 'socialLinks',
    //   title: 'Social Links',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'social' } }],
    //   sortable: true,
    //   group: 'footer'
    // },
    {
      name: 'engagement',
      title: 'Engagement',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'engagement' } }],
      sortable: true,
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
