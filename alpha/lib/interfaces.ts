import { ReactNode } from "react"
import type {
  Artform,
  Event,
  Facilitator,
  Keystage,
  Photography,
  LocaleMarkdown,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  Statement,
  Site
} from "@/generated/schema"

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface AllPagesData {
  site: Site
  statements: Statement[]
}

export interface IndexData extends AllPagesData {
  photography: Photography[]
  hero: Photography
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

