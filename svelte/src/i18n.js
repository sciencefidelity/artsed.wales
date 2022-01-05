import { register, init, getLocaleFromNavigator } from "svelte-i18n"

register("en", () => import("./intl/en.json"))
register("cy", () => import("./intl/cy.json"))

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
})
