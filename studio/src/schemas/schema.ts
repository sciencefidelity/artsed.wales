import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// object
import address from './object/address'
import facebookCard from './object/facebookCard'
import imageData from './object/imageData'
import metaData from './object/metaData'
import pageSettings from './object/pageSettings'
import portableText from './object/portableText'
import social from './object/social'
import twitterCard from './object/twitterCard'
import youtube from './object/youtube'

// locale
import localeAddress from './object/localeAddress'
import localeFacebook from './object/localeFacebook'
import localeEmail from './object/localeEmail'
import localeMeta from './object/localeMeta'
import localeString from './object/localeString'
import localeText from './object/localeText'
import localeTwitter from './object/localeTwitter'
import localeURL from './object/localeURL'

// document translation
import artform from './document/artform'
import event from './document/event'
import keystage from './document/keystage'
import newsletter from './document/newsletter'
import page from './document/page'
import post from './document/post'
import resource from './document/resource'
import staff from './document/staff'
import tag from './document/tag'
import video from './document/video'

// field translation
import comment from './field/comment'
import company from './field/company'
import engagement from './field/engagement'
import labelGroup from './field/labelGroup'
import navigation from './field/navigation'
import photography from './field/photography'
import quote from './field/quote'
import settings from './field/settings'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    address,
    facebookCard,
    imageData,
    metaData,
    pageSettings,
    portableText,
    social,
    twitterCard,
    youtube,

    // locale
    localeAddress,
    localeEmail,
    localeFacebook,
    localeMeta,
    localeString,
    localeText,
    localeTwitter,
    localeURL,

    // document
    artform,
    event,
    keystage,
    newsletter,
    page,
    post,
    resource,
    staff,
    tag,
    video,

    // field
    comment,
    company,
    engagement,
    labelGroup,
    navigation,
    photography,
    quote,
    settings
  ])
})
