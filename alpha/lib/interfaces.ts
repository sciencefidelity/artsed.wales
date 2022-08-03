import { ParsedUrlQuery } from "node:querystring";
import { icons } from "components/icons/icon";

export interface Address {
  city: string;
  line1: string;
  line2: string;
  postcode: string;
}

export interface Artform extends SanityDocument {
  __i18n_refs: Artform;
  _type: "artform";
  description: string;
  events: Event[];
  facebook: SocialCard;
  meta: MetaData;
  slug: string;
  title: string;
  twitter: SocialCard;
}

/**
 * @readonly address: LocaleAddress;
 * @readonly email: LocaleString;
 * @readonly telephone: LocaleString;
 * @readonly title: LocaleString;
 */
export interface Company extends SanityDocument {
  readonly address: LocaleAddress;
  readonly email: LocaleString;
  readonly telephone: LocaleString;
  readonly title: LocaleString;
}

export interface Dimensions {
  height: number;
  width: number;
}

/** engagementFigure: _key, count, title(en/cy); intro(en/cy); title(en/cy) */
export interface Engagement {
  engagementFigure: EngagementFigure[];
  intro: LocaleString;
  title: LocaleString;
}

export interface EngagementFigure {
  _key: string;
  count: number;
  title: LocaleString;
}

export interface Event extends SanityDocument {
  __i18n_refs: Event;
  _type: "event";
  artform: Artform[];
  body: PortableText;
  britelink: string;
  classOne: string;
  classTwo: string;
  classThree: string;
  dateEnd: string;
  dateStart: string;
  facebook: SocialCard;
  facilitators: Staff[];
  feature: boolean;
  icon: keyof typeof icons;
  imageOne: Image;
  imageTwo: Image;
  imageThree: Image;
  keystage: Keystage[];
  location: string;
  longTitle: string;
  meta: MetaData;
  pattern: string;
  price: number;
  shapeOne: string;
  shapeTwo: string;
  shapeThree: string;
  slug: string;
  summary: string;
  title: string;
  twitter: SocialCard;
}

export interface HeadProps {
  description: string;
  ogDescription: string;
  ogImage: Image;
  ogSiteName?: string;
  ogTitle: string;
  ogURL: string;
  title: string;
  twitterCreator?: string;
  twitterDescription: string;
  twitterImage: Image;
  twitterTitle: string;
}

export interface Image {
  _key?: string;
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export interface Keystage extends SanityDocument {
  __i18n_refs: Keystage;
  _type: "keystage";
  description: string;
  events: Event[];
  facebook: SocialCard;
  meta: MetaData;
  slug: string;
  title: string;
  twitter: SocialCard;
}

export interface Label {
  _type: "label";
  key: string;
  text: LocaleString;
}

export interface LocaleAddress {
  cy: Address;
  en: Address;
}

export interface LocaleMetaData {
  cy: MetaData;
  en: MetaData;
}

export interface LocaleSocialCard {
  cy: SocialCard;
  en: SocialCard;
}

export interface LocaleString {
  cy: string;
  en: string;
}

export interface MetaData {
  canonicalURL: string;
  description: string;
  title: string;
}

export interface Navigation {
  primary: NavItem[];
  secondary: NavItem[];
}

export interface NavItem {
  _key: string;
  label: LocaleString;
  url: URL;
}

export interface URL {
  _type:
    | "artform"
    | "event"
    | "keystage"
    | "newsletter"
    | "page"
    | "staff"
    | "tag"
    | "video";
  slug: string;
  title: string;
}

export interface Page extends SanityDocument {
  __i18n_refs: Page;
  _type: "page";
  body: PortableText;
  dimensions: Dimensions;
  facebook: SocialCard;
  image: Image;
  meta: MetaData;
  settings: PageSettings;
  slug: string;
  title: string;
  twitter: SocialCard;
}

export interface PageSettings {
  authors: Staff[];
  excerpt: string;
  publishedAt: string;
  tags: Tag[];
}

export interface Params extends ParsedUrlQuery {
  slug: string;
}

export interface Path {
  params: {
    slug: string;
  };
}

export type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export interface Post extends SanityDocument {
  __i18n_refs: Post;
  _type: "post";
  body: PortableText;
  dimensions: Dimensions;
  facebook: SocialCard;
  image: Image;
  meta: MetaData;
  settings: PageSettings;
  slug: string;
  title: string;
  twitter: SocialCard;
}

export interface Quote {
  _key: string;
  cite: string;
  dimensions: Dimensions;
  image: Image;
  organisation: LocaleString;
  quote: LocaleString;
}

export interface SocialLink {
  _key: string;
  url: string;
  name:
    | "facebook"
    | "github"
    | "intagram"
    | "linkedin"
    | "pinterest"
    | "soundcloud"
    | "tiktok"
    | "twitter"
    | "youtube";
}

export interface Settings extends SanityDocument {
  facebookCard: LocaleSocialCard;
  meta: LocaleMetaData;
  siteDescription: LocaleString;
  siteName: LocaleString;
  social: SocialLink[];
  twitterCard: LocaleSocialCard;
  url: LocaleString;
}

export interface SocialCard {
  description: string;
  image: Image;
  title: string;
}

export interface Staff extends SanityDocument {
  __i18n_refs: Staff;
  _type: "staff";
  avatar: Image;
  bio: string;
  dimensions: Dimensions;
  email: string;
  events: Event[];
  facebook: SocialCard;
  job: string;
  meta: MetaData;
  role: string[];
  slug: string;
  title: string;
  twitter: SocialCard;
}

export interface Tag extends SanityDocument {
  _type: "tag";
  description: string;
  facebookCard: SocialCard;
  image: Image;
  meta: MetaData;
  posts: Post[];
  slug: string;
  title: string;
  twitterCard: SocialCard;
}

export interface Video extends SanityDocument {
  __i18n_refs: Video;
  _type: "video";
  asset: VideoAsset;
  body: PortableText;
  dimensions: Dimensions;
  facebook: SocialCard;
  mainImage: Image;
  meta: MetaData;
  publishedAt: string;
  slug: string;
  title: string;
  twitter: SocialCard;
  videoLink: string;
}

export interface VideoAsset {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "mux.videoAsset";
  _updatedAt: string;
  assetId: string;
  data: VideoData;
  playbackId: string;
  status: "ready";
  thumbTime: 0;
  uploadId: string;
}

export interface VideoData {
  aspect_ratio: "16:9";
  created_at: string;
  duration: number;
  id: string;
  master_access: "none";
  max_stored_frame_rate: 25;
  max_stored_resolution: "HD";
  mp4_support: "none";
  passthrough: string;
  playback_ids: VideoPlaybackIds[];
  status: "ready";
  tracks: VideoTracks[];
  upload_id: string;
}

export interface VideoPlaybackIds {
  id: string;
  policy: "public";
}
export interface VideoTracks {
  duration: number;
  id: string;
  max_channel_layout: "stereo" | "mono";
  max_channels: number;
  max_frame_rate: number;
  max_height: 1080;
  max_width: 1920;
  type: "audio" | "video";
}

export interface SanityBlock {
  _type: "block";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SanityDocument {
  __i18n_lang: string;
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export interface SanityImageAsset extends SanityDocument {
  _type: "sanity.imageAsset";
  assetId: string;
  extension: string;
  metadata: SanityImageMetadata;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  uploadId: string;
  url: string;
}

export interface SanityImageCrop {
  _type: "sanity.imageCrop";
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface SanityImageDimensions {
  _type: "sanity.imageDimensions";
  aspectRatio: number;
  height: number;
  width: number;
}

export interface SanityImageHotspot {
  _type: "sanity.imageHotspot";
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface SanityImageMetadata {
  _type: "sanity.imageMetadata";
  dimensions: SanityImageDimensions;
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette: SanityImagePalette;
}

export interface SanityImagePalette {
  _type: "sanity.imagePalette";
  darkMuted: SanityImagePaletteSwatch;
  darkVibrant: SanityImagePaletteSwatch;
  dominant: SanityImagePaletteSwatch;
  lightMuted: SanityImagePaletteSwatch;
  lightVibrant: SanityImagePaletteSwatch;
  muted: SanityImagePaletteSwatch;
  vibrant: SanityImagePaletteSwatch;
}

export interface SanityImagePaletteSwatch {
  _type: "sanity.imagePaletteSwatch";
  background: string;
  foreground: string;
  population: number;
  title: string;
}

export declare type SanityKeyed<T> = T extends object
  ? T & {
      _key: string;
    }
  : T;

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
export declare type SanityReference<_T> = {
  _type: "reference";
  _ref: string;
};

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
