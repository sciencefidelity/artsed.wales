import { ReactNode } from "react"
import type {
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

export interface LayoutProps {
  children: ReactNode
  site: Site
}

export interface HeaderProps {
  site: Site
}
