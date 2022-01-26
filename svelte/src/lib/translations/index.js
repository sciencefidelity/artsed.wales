import i18n from "sveltekit-i18n"
import lang from "./lang.json"

export const config = {
  translations: {
    en: { lang },
    cy: { lang }
  },
  loaders: [
    {
      locale: "en",
      key: "content",
      routes: ["", "/"],
      loader: async () => (await import("./en/content.json")).default
    },
    {
      locale: "en",
      key: "courses",
      routes: ["", "/courses"],
      loader: async () => (await import("./en/courses.json")).default
    },
    {
      locale: "en",
      key: "error",
      routes: ["error"],
      loader: async () => (await import("./en/error.json")).default
    },
    {
      locale: "cy",
      key: "content",
      routes: ["", "/"],
      loader: async () => (await import("./cy/content.json")).default
    },
    {
      locale: "cy",
      key: "courses",
      routes: ["", "/courses"],
      loader: async () => (await import("./cy/courses.json")).default
    },
    {
      locale: "cy",
      key: "error",
      routes: ["error"],
      loader: async () => (await import("./cy/error.json")).default
    }
  ]
}

export const defaultLocale = "en"

export const { t, locale, locales, loading, loadTranslations, translations } =
  new i18n(config)

// Translations logs
loading.subscribe(async $loading => {
  if ($loading) {
    console.log("Loading translations...")

    await loading.toPromise()
    console.log("Updated translations", translations.get())
  }
})
