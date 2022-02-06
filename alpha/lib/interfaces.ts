import { ReactNode, Properties } from "react"
import type {
  Artform,
  Event,
  Facilitator,
  Figure,
  Keystage,
  LocaleMarkdown,
  Photography,
  Quote,
  Social,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
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
  engagement?: Figure[]
  socialLinks?: Social[]
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
  title?: {
    cy: string
    en: string
  }
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

export interface MarkdownProps {
  content: LocaleMarkdown
}

export interface SignUpProps {
  site: Site
  statements: Statement[]
}

export interface QuoteProps {
  photograph: Photography
  quote: Quote
  direction?: Properties<string | number, string & {}>
}

export interface FooterProps {
  site: SiteRefs
}
