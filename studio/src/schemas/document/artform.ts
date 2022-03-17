import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import {
  Art,
  FilmProjector,
  Guitar,
  PerformingArts,
  WomanDancing
} from '../../components/twemoji'

export default {
  name: 'artform',
  title: 'Artform',
  type: 'document',
  icon: Art,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
      title: 'Title',
      type: 'string',
      group: 'content'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      let previewIcon = Art
      if (title === 'Dance') previewIcon = WomanDancing
      if (title === 'Drama') previewIcon = PerformingArts
      if (title === 'Film and Digital Media') previewIcon = FilmProjector
      if (title === 'Music') previewIcon = Guitar
      return {
        title: title,
        media: previewIcon
      }
    }
  }
}
