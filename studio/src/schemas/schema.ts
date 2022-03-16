import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/portableText'
import youtube from './objects/youtube'

// localization
import localeEmail from './objects/localeEmail'
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import localeURL from './objects/localeURL'

// documements
import comment from './documents/comment'
import event from './documents/event'
import figure from './documents/figure'
import newsletter from './documents/newsletter'
import page from './documents/page'
import staff from './documents/staff'
import photography from './documents/photography'
import post from './documents/post'
import quote from './documents/quote'
import social from './documents/social'
import video from './documents/video'

//taxonomy
import artform from './taxonomy/artform'
import tag from './taxonomy/tag'
import keystage from './taxonomy/keystage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    blockContent,
    localeEmail,
    localeString,
    localeText,
    localeURL,
    youtube,

    // documents
    comment,
    event,
    figure,
    newsletter,
    page,
    staff,
    photography,
    post,
    quote,
    social,
    video,

    // taxonomy
    artform,
    tag,
    keystage
  ])
})
