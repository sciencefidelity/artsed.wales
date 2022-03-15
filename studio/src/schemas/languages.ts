// export interface Language {
//   readonly name: string
//   readonly title: string
//   readonly isDefault?: boolean
// }

export const supportedLanguages = [
  { name: 'en', title: 'English', isDefault: true },
  { name: 'cy', title: 'Welsh' }
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)
