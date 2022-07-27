export interface Image {
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export interface NestedHeadings {
  id: string;
  title: string;
  items: NestedHeadings[];
}

export interface PortableText {
  _key: string;
  _type: "captionImage";
  asset: SanityReference<SanityImageAsset>;
  caption: string;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
  children: SanityBlockChildren[];
  markDefs?: SanityMarkDef[];
  style: "normal" | "h1" | "h2" | "h3" | "h4";
  level?: number;
  listItem?: "bullet";
}

export interface Resource extends SanityDocument {
  body: PortableText[];
  image: Image;
  slug: string;
  title: string;
}

interface SanityBlockChildren {
  _key: string;
  _type: "span";
  marks?: SanityMark[];
  text: string;
}

type SanityMark = "em" | string;

interface SanityMarkDef {
  _key: string;
  _type: "link";
  blank: boolean;
  href: string;
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

export declare type SanityReference<_T> = {
  _type: "reference";
  _ref: string;
};

export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}
