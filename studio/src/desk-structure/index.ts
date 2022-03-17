import S from '@sanity/desk-tool/structure-builder'
import * as Structure from '@sanity/document-internationalization/lib/structure'
import {
  Art,
  BallotBoxWithCheck,
  BarChart,
  Books,
  CameraFlash,
  CardFileBox,
  Clipboard,
  ClosedLockWithKey,
  Date,
  FilmProjector,
  Gear,
  Label,
  Newspaper,
  SpeechBalloon,
  WhiteCheckMark,
  WomanTeacher,
  WorldMap,
  WritingHand
} from '../components/twemoji'

const items = [
  S.listItem()
    .title('Event')
    .icon(Date)
    .child(
      S.documentTypeList('event')
        .title('Event')
        .filter('_type == "event" && __i18n_lang != "cy"')
    ),
  S.listItem()
    .title('Post')
    .icon(WritingHand)
    .child(
      S.documentTypeList('post')
        .title('Post')
        .filter('_type == "post" && __i18n_lang != "cy"')
    ),
  S.listItem()
    .title('Page')
    .icon(Books)
    .child(
      S.documentTypeList('page')
        .title('Page')
        .filter('_type == "page" && __i18n_lang != "cy"')
    ),
  S.listItem()
    .title('Newsletter')
    .icon(Newspaper)
    .child(
      S.documentTypeList('newsletter')
        .title('Newsletter')
        .filter('_type == "newsletter" && __i18n_lang != "cy"')
    ),
  S.listItem()
    .title('Video')
    .icon(FilmProjector)
    .child(
      S.documentTypeList('video')
        .title('Video')
        .filter('_type == "video" && __i18n_lang != "cy"')
    ),
  S.divider(),
  S.listItem()
  .title('Comment')
  .icon(SpeechBalloon)
  .child(
    S.list()
      .title('Inbox')
      .items([
        S.listItem()
        .title('Pending')
        .icon(BallotBoxWithCheck)
        .child(
          S.documentTypeList('comment')
            .title('Comments pending')
            .filter('_type == "comment" && approved != true')
        ),
        S.listItem()
        .title('Approved')
        .icon(WhiteCheckMark)
        .child(
          S.documentTypeList('comment')
            .title('Comments approved')
            .filter('_type == "comment" && approved == true')
        )
      ])
  ),
  S.listItem()
  .title('Engagement')
  .icon(BarChart)
  .child(
    S.list()
      .title('Engagement')
      .items([
        S.listItem()
        .title('Engagement')
        .icon(BarChart)
        .child(
          S.documentTypeList('engagement')
            .title('Engagement')
            .filter('_type == "engagement"')
        ),
        S.listItem()
        .title('Photography')
        .icon(CameraFlash)
        .child(
          S.documentTypeList('photography')
            .title('Photography')
            .filter('_type == "photography"')
        ),
        S.listItem()
        .title('Quote')
        .icon(Clipboard)
        .child(
          S.documentTypeList('quote')
            .title('Quote')
            .filter('_type == "quote"')
        )
      ])
  ),
  S.listItem()
    .title('Taxonomy')
    .icon(WorldMap)
    .child(
      S.list()
        .title('Taxonomy')
        .items([
          S.listItem()
          .title('Artform')
          .icon(Art)
          .child(
            S.documentTypeList('artform')
              .title('Artform')
              .filter('_type == "artform" && __i18n_lang != "cy"')
          ),
          S.listItem()
          .title('Key Stage')
          .icon(ClosedLockWithKey)
          .child(
            S.documentTypeList('keystage')
              .title('Key Stage')
              .filter('_type == "keystage" && __i18n_lang != "cy"')
          ),
          S.listItem()
          .title('Staff')
          .icon(WomanTeacher)
          .child(
            S.documentTypeList('staff')
              .title('Staff')
              .filter('_type == "staff" && __i18n_lang != "cy"')
          ),
          S.listItem()
          .title('Tag')
          .icon(Label)
          .child(
            S.documentTypeList('tag')
              .title('Tag')
              .filter('_type == "tag" && __i18n_lang != "cy"')
          ),
        ])
    ),
  S.divider(),
  S.listItem()
    .title('Settings')
    .icon(Gear)
    .child(
      S.list()
        .title('Taxonomy')
        .items([
          S.listItem()
            .title('Settings')
            .icon(Gear)
            .child(S.document().schemaType('settings').documentId('settings')),
          S.listItem()
            .title('Label Group')
            .icon(CardFileBox)
            .child(S.document().schemaType('labelGroup').documentId('labelGroup')),
        ])
    ),
  S.divider(),
  Structure.getMaintenanceListItem().serialize(),
  ...S.documentTypeListItems().filter(
    item => ![
      'artform',
      'comment',
      'engagement',
      'event',
      'keystage',
      'labelGroup',
      'newsletter',
      'page',
      'photography',
      'post',
      'quote',
      'settings',
      'staff',
      'tag',
      'video'
    ].includes(item.getId())
  )
]

export default () => {
  return (
    S.list()
      .title('Content')
      .items(items)
  )
}
