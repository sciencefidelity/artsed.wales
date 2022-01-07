<script context="module">
  import { loadTranslations } from "$lib/translations/index.js"

  export const load = async ({ url }) => {
    const { pathname } = url

    const locale = "en"
    await loadTranslations(locale, pathname)

    return {}
  }
</script>

<script lang="ts">
  import "sanitize.css/sanitize.css"
  import "sanitize.css/assets.css"
  import "sanitize.css/reduce-motion.css"
  import "sanitize.css/typography.css"
  import "../styles/app.scss"
  import Footer from "$lib/Footer.svelte"
  import Header from "$lib/Header.svelte"
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
