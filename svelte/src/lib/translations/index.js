import i18n from "sveltekit-i18n"
import lang from "./lang.json"

export const config = {
  loaders: [
    {
      locale: "en",
      key: "lang",
      loader: () => lang
    },
    {
      locale: "en",
      key: "content",
      loader: async () => (await import("./en/content.json")).default
    },
    {
      locale: "cy",
      key: "lang",
      loader: () => lang
    },
    {
      locale: "cy",
      key: "content",
      loader: async () => (await import("./cy/content.json")).default
    }
  ]
}

export const { t, loading, locales, locale, loadTranslations } = new i18n(
  config
)

loading.subscribe(
  $loading => $loading && console.log("Loading translations...")
)
