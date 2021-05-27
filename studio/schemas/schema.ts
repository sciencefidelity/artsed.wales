import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'
import captionImage from './objects/captionImage'

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeRichText from './objects/localeRichText'
import localeSlug from './objects/localeSlug'
import localeString from './objects/localeString'

// documements
import event from './documents/event'
import post from './documents/post'

//taxonomy
import artform from './taxonomy/artform'
import author from './taxonomy/author'
import category from './taxonomy/category'
import keystage from './taxonomy/keystage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // objects
    blockContent,
    captionImage,
    localeRichText,
    localeSlug,
    localeString,

    // documents
    event,
    post,

    // taxonomy
    artform,
    keystage,
    author,
    category,

  ]),
})
