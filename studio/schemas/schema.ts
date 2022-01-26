import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'
import captionImage from './objects/captionImage'

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeMarkdown from './objects/localeMarkdown'
import localeRichText from './objects/localeRichText'
import localeSlug from './objects/localeSlug'
import localeString from './objects/localeString'
import localeText from './objects/localeText'

// documements
import event from './documents/event'
import photograpghy from './documents/photograpghy'
import people from './documents/people'
import post from './documents/post'
import quote from './documents/quote'
import statement from './documents/statement'

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
    localeMarkdown,
    localeRichText,
    localeSlug,
    localeString,
    localeText,

    // documents
    event,
    people,
    photograpghy,
    post,
    quote,
    statement,

    // taxonomy
    artform,
    author,
    category,
    keystage,

  ]),
})
