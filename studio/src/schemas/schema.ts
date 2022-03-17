import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// object
import portableText from './object/portableText'
import metaData from './object/metaData'
import facebookCard from './object/facebookCard'
import twitterCard from './object/twitterCard'
import youtube from './object/youtube'

// locale
import localeEmail from './object/localeEmail'
import localeString from './object/localeString'
import localeText from './object/localeText'
import localeURL from './object/localeURL'

// document translation
import artform from './document/artform'
import event from './document/event'
import keystage from './document/keystage'
import newsletter from './document/newsletter'
import page from './document/page'
import post from './document/post'
import staff from './document/staff'
import tag from './document/tag'
import video from './document/video'

// field translation
import comment from './field/comment'
import engagement from './field/engagement'
import photography from './field/photography'
import quote from './field/quote'
import settings from './field/settings'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    facebookCard,
    metaData,
    portableText,
    twitterCard,
    youtube,

    // locale
    localeEmail,
    localeString,
    localeText,
    localeURL,

    // document
    artform,
    event,
    keystage,
    newsletter,
    page,
    post,
    staff,
    tag,
    video,

    // field
    comment,
    engagement,
    photography,
    quote,
    settings
  ])
})