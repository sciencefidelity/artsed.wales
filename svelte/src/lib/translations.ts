import i18n from "sveltekit-i18n"

export const config = {
  loaders: [
    {
      locale: "en",
      key: "home",
      loader: async () => (await import("../intl/en.json")).default
    },
    {
      locale: "cy",
      key: "home",
      loader: async () => (await import("../intl/cy.json")).default
    }
  ]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
)
