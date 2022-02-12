import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'
import captionImage from './objects/captionImage'

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeEmail from './objects/localeEmail'
import localeMarkdown from './objects/localeMarkdown'
import localeRichText from './objects/localeRichText'
import localeSlug from './objects/localeSlug'
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import localeURL from './objects/localeURL'

// documements
import event from './documents/event'
import figure from './documents/figure'
import photography from './documents/photography'
import people from './documents/people'
import post from './documents/post'
import quote from './documents/quote'
import site from './documents/site'
import social from './documents/social'
import statement from './documents/statement'
import video from './documents/video'

//taxonomy
import artform from './taxonomy/artform'
import author from './taxonomy/author'
import category from './taxonomy/category'
import facilitator from './taxonomy/facilitator'
import keystage from './taxonomy/keystage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    blockContent,
    captionImage,
    localeEmail,
    localeMarkdown,
    localeRichText,
    localeSlug,
    localeString,
    localeText,
    localeURL,

    // documents
    event,
    figure,
    people,
    photography,
    post,
    quote,
    site,
    social,
    statement,
    video,

    // taxonomy
    artform,
    author,
    category,
    facilitator,
    keystage
  ])
})
