import { ReactNode } from "react"
import type {
  // Artform,
  // Event,
  // Facilitator,
  Figure,
  // Keystage,
  LocaleString,
  // Photography,
  // Post,
  // Quote,
  Social,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
  Statement,
  // Site,
  Video
} from "@/generated/schema"

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface Quote {
  _id: string
  cite: string
  organisation: string
  quote: BlockContent
}

export interface Photography {
  image: Image
  title: string
}

export interface Site {
  addressLine1: string
  addressLine2: string
  email: string
  engagements: Engagement[]
  keywords: string
  seoDescription: string
  seoImage: Image
  seoTitle: string
  signUp: string
  signUpPlaceholder: string
  siteDescription: string
  siteName: string
  socialLinks: SocialLink[],
  twitterHandle: string
}

export interface Engagement {
  _id: string
  count: number
  heading: string
}

export interface SocialLink {
  _id: string
  link: string
  site: string
  username: string
}

export interface Statements {
  statement: BlockContent
}

export interface Event {
  _id: string
  _type: string
  artforms: Artform[]
  body: BlockContent
  britelink: string
  date: string
  date2: string
  facilitators: Facilitator[]
  imageCaption: string
  keystages: Keystage[]
  location: string
  mainImage: string
  ogDescription: string
  ogTitle: string
  price: string
  slug: string
  subtitle: string
  title: string
}

export interface Artform {
  _id: string
  title: string
}

export interface Facilitator {
  _id: string
  name: string
}

export interface Keystage {
  _id: string
  title: string
}

export interface Post {
  _createdAt: string
  _id: string
  _type: string
  author: Author
  body: BlockContent
  categories: Category[]
  mainImage: Image
  ogDescription: string
  ogTitle: string
  publishedAt: string
  slug: string
  title: string
}

export interface Author {
  _type: string
  name: string
  slug: string
}

export interface Category {
  _id: string
  _type: string
  title: string
  slug: string
}

// export interface AllPagesData {
//   site: SiteRefs
//   statements: Statement[]
// }
//
// export interface IndexData extends AllPagesData {
//   hero: Photography
//   photography: Photography[]
//   video: Video
//   quotes: Quote[]
// }
//
// export interface SiteRefs extends Site {
//   engagementFigures?: Figure[]
//   socialMediaLinks?: Social[]
// }
//
// export interface AboutData extends AllPagesData {
//   statements: Statement[]
// }
//
//
// export interface EventsData extends AllPagesData {
//   events: Event[]
// }
//
// export interface PostData extends AllPagesData {
//   post: Post
// }
//
// export interface EventData extends AllPagesData {
//   event: Event
// }
//
// export interface LayoutProps {
//   children: ReactNode
//   site: Site
//   statements: Statement[]
//   title?: LocaleString
// }
//
// export interface HeaderProps {
//   site: Site
// }
//
// export interface EventProps {
//   event: EventRefs
// }
//
// export interface EventRefs extends Event {
//   artforms?: Artform[]
//   people?: Facilitator[]
//   keystages?: Keystage[]
// }
//
// export interface SignUpProps {
//   site: Site
//   statements: Statement[]
// }
//
// export interface QuoteProps {
//   photograph: Photography
//   quote: Quote
//   direction?: any
// }
//
// export interface FooterProps {
//   site: SiteRefs
// }
//
// export interface EngagementProps {
//   site: SiteRefs
//   statement: Statement
// }
//
// export interface SocialLinksProps {
//   site: SiteRefs
// }
//
// export interface ImageProps {
//   alt: string
//   image: Image
//   width?: number
//   height?: number
//   lazy?: boolean | true
// }
