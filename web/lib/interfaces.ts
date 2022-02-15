import { ReactNode } from "react"
import type {
  Artform,
  Event,
  Facilitator,
  Figure,
  Keystage,
  LocaleString,
  Photography,
  Quote,
  Social,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
  Statement,
  Site,
  Video
} from "@/generated/schema"

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface AllPagesData {
  site: SiteRefs
  statements: Statement[]
}

export interface IndexData extends AllPagesData {
  hero: Photography
  photography: Photography[]
  video: Video
  quotes: Quote[]
}

export interface SiteRefs extends Site {
  engagementFigures?: Figure[]
  socialMediaLinks?: Social[]
}

export interface AboutData extends AllPagesData {
  statements: Statement[]
}


export interface EventsData extends AllPagesData {
  events: Event[]
}

export interface LayoutProps {
  children: ReactNode
  site: Site
  statements: Statement[]
  title?: LocaleString
}

export interface HeaderProps {
  site: Site
}

export interface EventProps {
  event: EventRefs
}

export interface EventRefs extends Event {
  artforms?: Artform[]
  people?: Facilitator[]
  keystages?: Keystage[]
}

export interface SignUpProps {
  site: Site
  statements: Statement[]
}

export interface QuoteProps {
  photograph: Photography
  quote: Quote
  direction?: any
}

export interface FooterProps {
  site: SiteRefs
}

export interface EngagementProps {
  site: SiteRefs
  statement: Statement
}

export interface SocialLinksProps {
  site: SiteRefs
}

export interface ImageProps {
  alt: string
  image: Image
  width?: number
  height?: number
  lazy?: boolean | true
}
