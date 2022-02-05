import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Event
 *
 *
 */
export interface Event extends SanityDocument {
  _type: "event";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Subtitle — `localeString`
   *
   *
   */
  subtitle?: LocaleString;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Date and Time — `datetime`
   *
   *
   */
  date?: string;

  /**
   * Second Date and Time — `datetime`
   *
   *
   */
  date2?: string;

  /**
   * Location — `localeString`
   *
   *
   */
  location?: LocaleString;

  /**
   * Price — `number`
   *
   *
   */
  price?: number;

  /**
   * Eventbrite link — `url`
   *
   *
   */
  britelink?: string;

  /**
   * Body — `localeMarkdown`
   *
   *
   */
  body?: LocaleMarkdown;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Image Caption — `localeString`
   *
   *
   */
  imageCaption?: LocaleString;

  /**
   * Facilitators — `array`
   *
   *
   */
  facilitators?: Array<SanityKeyedReference<Facilitator>>;

  /**
   * Artforms — `array`
   *
   *
   */
  artform?: Array<SanityKeyedReference<Artform>>;

  /**
   * Key Stage — `array`
   *
   *
   */
  keystage?: Array<SanityKeyedReference<Keystage>>;

  /**
   * Social title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters)
   */
  ogTitle?: LocaleString;

  /**
   * Social description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters)
   */
  ogDescription?: LocaleString;

  /**
   * Social image — `image`
   *
   *
   */
  ogImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Figure
 *
 *
 */
export interface Figure extends SanityDocument {
  _type: "figure";

  /**
   * Heading — `localeString`
   *
   *
   */
  heading?: LocaleString;

  /**
   * Count — `number`
   *
   *
   */
  count?: number;
}

/**
 * People
 *
 *
 */
export interface People extends SanityDocument {
  _type: "people";

  /**
   * Name — `string`
   *
   *
   */
  fullName?: string;

  /**
   * Role — `array`
   *
   *
   */
  role?: Array<SanityKeyed<string>>;

  /**
   * Job — `localeString`
   *
   *
   */
  job?: LocaleString;

  /**
   * Bio — `localeMarkdown`
   *
   *
   */
  bio?: LocaleMarkdown;

  /**
   * Avatar — `image`
   *
   *
   */
  avatar?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Photography
 *
 *
 */
export interface Photography extends SanityDocument {
  _type: "photography";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero Image — `boolean`
   *
   *
   */
  hero?: boolean;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `captionImage`
   *
   *
   */
  mainImage?: CaptionImage;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `localeMarkdown`
   *
   *
   */
  body?: LocaleMarkdown;

  /**
   * Social title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters)
   */
  ogTitle?: LocaleString;

  /**
   * Social description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters)
   */
  ogDescription?: LocaleString;
}

/**
 * Quote
 *
 *
 */
export interface Quote extends SanityDocument {
  _type: "quote";

  /**
   * Quote — `localeMarkdown`
   *
   *
   */
  quote?: LocaleMarkdown;

  /**
   * Citation — `string`
   *
   * Who is the quote by?
   */
  cite?: string;

  /**
   * Organisation — `localeString`
   *
   * Who is the quote by?
   */
  organisation?: LocaleString;
}

/**
 * Site
 *
 *
 */
export interface Site extends SanityDocument {
  _type: "site";

  /**
   * Site Name — `localeString`
   *
   *
   */
  siteName?: LocaleString;

  /**
   * Site Description — `localeString`
   *
   *
   */
  siteDescription?: LocaleString;

  /**
   * Keywords — `localeString`
   *
   * A list of keywords seperated by commas.
   */
  keywords?: LocaleString;

  /**
   * SEO title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: LocaleString;

  /**
   * SEO description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: LocaleString;

  /**
   * Twitter Handle — `string`
   *
   *
   */
  twitterHandle?: string;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px.
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Address Line 1 — `localeString`
   *
   *
   */
  addressLine1?: LocaleString;

  /**
   * Address Line 2 — `localeString`
   *
   *
   */
  addressLine2?: LocaleString;

  /**
   * Telephone — `string`
   *
   *
   */
  telephone?: string;

  /**
   * Email — `localeString`
   *
   *
   */
  email?: LocaleString;

  /**
   * Sign Up Heading — `localeString`
   *
   *
   */
  signUp?: LocaleString;

  /**
   * Sign Up Text — `localeString`
   *
   *
   */
  signUpText?: LocaleString;

  /**
   * Sign Up Placeholder — `localeString`
   *
   * One line only (ie Email address...)
   */
  signUpPlaceholder?: LocaleString;

  /**
   * Social Links — `array`
   *
   *
   */
  socialLinks?: Array<SanityKeyedReference<Social>>;

  /**
   * Engagement — `array`
   *
   *
   */
  engagement?: Array<SanityKeyedReference<Figure>>;
}

/**
 * Social Links
 *
 *
 */
export interface Social extends SanityDocument {
  _type: "social";

  /**
   * site — `string`
   *
   *
   */
  site?: string;

  /**
   * Username — `string`
   *
   *
   */
  username?: string;

  /**
   * Link — `url`
   *
   *
   */
  link?: string;
}

/**
 * Statement
 *
 *
 */
export interface Statement extends SanityDocument {
  _type: "statement";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Statement — `localeMarkdown`
   *
   *
   */
  statement?: LocaleMarkdown;
}

/**
 * Video
 *
 *
 */
export interface Video extends SanityDocument {
  _type: "video";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Body — `localeMarkdown`
   *
   *
   */
  body?: LocaleMarkdown;

  /**
   * Video Link — `url`
   *
   *
   */
  videoLink?: string;

  /**
   * Publish date — `date`
   *
   *
   */
  publishDate?: string;

  /**
   * Slug — `localeSlug`
   *
   *
   */
  slug?: LocaleSlug;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Artform
 *
 *
 */
export interface Artform extends SanityDocument {
  _type: "artform";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Description — `localeMarkdown`
   *
   *
   */
  description?: LocaleMarkdown;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `localeMarkdown`
   *
   *
   */
  bio?: LocaleMarkdown;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Description — `localeMarkdown`
   *
   *
   */
  description?: LocaleMarkdown;
}

/**
 * Facilitator
 *
 *
 */
export interface Facilitator extends SanityDocument {
  _type: "facilitator";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `localeMarkdown`
   *
   *
   */
  bio?: LocaleMarkdown;
}

/**
 * Key Stage
 *
 *
 */
export interface Keystage extends SanityDocument {
  _type: "keystage";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Description — `localeMarkdown`
   *
   *
   */
  description?: LocaleMarkdown;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type CaptionImage = {
  _type: "captionImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Attribution — `localeString`
   *
   *
   */
  Caption?: LocaleString;
};

export type LocaleMarkdown = {
  _type: "localeMarkdown";
  /**
   * English — `markdown`
   *
   *
   */
  en?: Markdown;

  /**
   * Welsh — `markdown`
   *
   *
   */
  cy?: Markdown;
};

export type LocaleRichText = {
  _type: "localeRichText";
  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;

  /**
   * Welsh — `blockContent`
   *
   *
   */
  cy?: BlockContent;
};

export type LocaleSlug = {
  _type: "localeSlug";
  /**
   * English — `slug`
   *
   *
   */
  en?: { _type: "en"; current: string };

  /**
   * Welsh — `slug`
   *
   *
   */
  cy?: { _type: "cy"; current: string };
};

export type LocaleString = {
  _type: "localeString";
  /**
   * English — `string`
   *
   *
   */
  en?: string;

  /**
   * Welsh — `string`
   *
   *
   */
  cy?: string;
};

export type LocaleText = {
  _type: "localeText";
  /**
   * English — `text`
   *
   *
   */
  en?: string;

  /**
   * Welsh — `text`
   *
   *
   */
  cy?: string;
};

export type Documents =
  | Event
  | Figure
  | People
  | Photography
  | Post
  | Quote
  | Site
  | Social
  | Statement
  | Video
  | Artform
  | Author
  | Category
  | Facilitator
  | Keystage;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Markdown = any;
