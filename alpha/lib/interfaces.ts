import { ReactNode } from "react"
import type {
  Artform,
  Event,
  Facilitator,
  Keystage,
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
}

export interface IndexData extends AllPagesData {
  statements: Statement[]
}

export interface EventsData extends AllPagesData {
  events: Event[]
}

export interface LayoutProps {
  children: ReactNode
  site: Site
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
