<script lang="ts" context="module">
  import { loadTranslations } from "$lib/translations/index.js"

  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => {
    const { pathname } = url

    const lang = `${pathname.match(/\w+?(?=\/|$)/) || ""}`

    const route = pathname.replace(new RegExp(`^/${lang}`), "")

    await loadTranslations(lang, route)

    return { stuff: { route, lang } }
  }
</script>

<slot />
