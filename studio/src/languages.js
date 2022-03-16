const languages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'cy', title: 'Welsh'},
]

const i18n = {
  languages: languages,
  base: languages.find((item) => item.isDefault)?.id,
}

module.exports = { i18n }
