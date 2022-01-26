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
   * Location — `string`
   *
   *
   */
  location?: string;

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
   * Social title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters)
   */
  ogTitle?: string;

  /**
   * Social description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters)
   */
  ogDescription?: string;

  /**
   * Body — `localeMarkdown`
   *
   *
   */
  body?: LocaleMarkdown;

  /**
   * Main image — `captionImage`
   *
   *
   */
  mainImage?: CaptionImage;
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
   * Body — `localeRichText`
   *
   *
   */
  body?: LocaleRichText;

  /**
   * Social title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters)
   */
  ogTitle?: string;

  /**
   * Social description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters)
   */
  ogDescription?: string;
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
   * Description — `localeText`
   *
   *
   */
  description?: LocaleText;
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
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
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
   * Description — `text`
   *
   *
   */
  description?: string;
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
   * Description — `localeText`
   *
   *
   */
  description?: LocaleText;
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
   * Attribution — `string`
   *
   *
   */
  Caption?: string;
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
  | People
  | Photography
  | Post
  | Quote
  | Statement
  | Artform
  | Author
  | Category
  | Keystage;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Markdown = any;
