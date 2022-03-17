import { Gear } from '../../components/twemoji'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: Gear,
  groups: [
    {
      name: 'site',
      title: 'Site'
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
    },
    {
      name: 'social',
      title: 'Social'
    }
  ],
  fields: [
    {
      name: 'siteName',
      title: 'Site name',
      type: 'localeString',
      description: 'The name of your site',
      group: 'site'
    },
    {
      name: 'siteDescription',
      title: 'Site description',
      type: 'localeString',
      description: 'Used in your theme, meta data and search results',
      group: 'site'
    },
    {
      name: 'url',
      title: 'Site URL',
      type: 'localeURL',
      group: 'site'
    },
    {
      name: 'meta',
      title: 'Site meta',
      type: 'localeMeta',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'localeTwitter',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'localeFacebook',
      group: 'facebook'
    },
    {
      name: 'social',
      title: 'Social links',
      type: 'social',
      description: 'URLs of your social profiles',
      group: 'social'
    }
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteDescription',
      media: 'twitterCard.image'
    }
  }
}
