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
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
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
