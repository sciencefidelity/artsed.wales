export interface Address {
  city: string
  line1: string
  line2: string
  postcode: string
}

export interface Artform extends SanityDocument {
  __i18n_refs: Artform
  _type: "artform"
  description: string
  events: Event[]
  slug: string
  title: string
}

export interface Company extends SanityDocument {
  address: LocaleAddress
  description: LocaleString
  slug: string
  title: LocaleString
}

export interface Event extends SanityDocument {
  __i18n_refs: Event
  _type: "event"
  body: PortableText
  dateEnd: string
  dateStart: string
  facilitators: Staff[]
  keystage: Keystage[]
  location: string
  price: number
  slug: string
  summary: string
  title: string
}

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface Keystage extends SanityDocument {
  __i18n_refs: Keystage
  _type: "keystage"
  description: string
  events: Event[]
  slug: string
  title: string
}

export interface Label {
  _type: "label"
  key: string
  text: LocaleString
}

export interface LocaleAddress {
  cy: Address
  en: Address
}

export interface LocaleMetaData {
  cy: MetaData
  en: MetaData
}

export interface LocaleSocialCard {
  cy: SocialCard
  en: SocialCard
}

export interface LocaleString {
  cy: string
  en: string
}

export interface MetaData {
  canonicalURL: string
  description: string
  title: string
}

export interface Navigation {
  primary: NavItem[]
  secondary: NavItem[]
}

export interface NavItem {
  _id: string
  label: LocaleString
  url: URL
}

export interface URL {
  _type: "artform" | "event" | "keystage" | "newsletter" | "page" | "staff" | "tag" | "video"
  slug: string
  title: string
}

export interface Page extends SanityDocument {
  _type: "page"
  body: PortableText
  facebookCard: SocialCard
  image: Image
  meta: MetaData
  settings: PageSettings
  slug: string
  title: string
  twitterCard: SocialCard
}

export interface PageSettings {
  authors: Staff[]
  excerpt: string
  publishedAt: string
  tags: Tag[]
}

export type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image"
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export interface Post extends SanityDocument {
  _type: "post"
  body: PortableText
  facebookCard: SocialCard
  image: Image
  meta: MetaData
  settings: PageSettings
  slug: string
  title: string
  twitterCard: SocialCard
}

export interface SocialLink {
  _key: string
  url: string
  name: "facebook" | "github" | "intagram" | "linkedin" | "pinterest" | "soundcloud" | "tiktok" | "twitter" | "youtube"
}

export interface Settings extends SanityDocument {
  facebookCard: LocaleSocialCard
  meta: LocaleMetaData
  siteDescription: LocaleString
  siteName: LocaleString
  socialLinks: SocialLink[]
  twitterCard: LocaleSocialCard
  url: LocaleString
}

export interface SocialCard {
  description: string
  image: Image
  title: string
}

export interface Staff extends SanityDocument {
  __i18n_refs: Staff
  _type: "staff"
  avatar: Image
  bio: string
  events: Event[]
  job: string
  role: string[]
  slug: string
  title: string
}

export interface Tag extends SanityDocument {
  _type: "tag"
  description: string
  facebookCard: SocialCard
  image: Image
  meta: MetaData
  posts: Post[]
  slug: string
  title: string
  twitterCard: SocialCard
}

export interface SanityBlock {
  _type: "block"
  [key: string]: any
}

export interface SanityDocument {
  __i18n_lang: string
  _id: string
  _createdAt: string
  _rev: string
  _updatedAt: string
}

export interface SanityImageAsset extends SanityDocument {
  _type: "sanity.imageAsset"
  assetId: string
  extension: string
  metadata: SanityImageMetadata
  mimeType: string
  originalFilename: string
  path: string
  sha1hash: string
  size: number
  uploadId: string
  url: string
}

export interface SanityImageCrop {
  _type: "sanity.imageCrop"
  bottom: number
  left: number
  right: number
  top: number
}

export interface SanityImageDimensions {
  _type: "sanity.imageDimensions"
  aspectRatio: number
  height: number
  width: number
}

export interface SanityImageHotspot {
  _type: "sanity.imageHotspot"
  height: number
  width: number
  x: number
  y: number
}

export interface SanityImageMetadata {
  _type: "sanity.imageMetadata"
  dimensions: SanityImageDimensions
  hasAlpha: boolean
  isOpaque: boolean
  lqip: string
  palette: SanityImagePalette
}

export interface SanityImagePalette {
  _type: "sanity.imagePalette"
  darkMuted: SanityImagePaletteSwatch
  darkVibrant: SanityImagePaletteSwatch
  dominant: SanityImagePaletteSwatch
  lightMuted: SanityImagePaletteSwatch
  lightVibrant: SanityImagePaletteSwatch
  muted: SanityImagePaletteSwatch
  vibrant: SanityImagePaletteSwatch
}

export interface SanityImagePaletteSwatch {
  _type: "sanity.imagePaletteSwatch"
  background: string
  foreground: string
  population: number
  title: string
}

export declare type SanityKeyed<T> = T extends object ? T & {
  _key: string
} : T

export declare type SanityReference<_T> = {
  _type: "reference"
  _ref: string
}

