<script lang="ts">
  import { t, locales, locale } from "$lib/translations"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import { writable } from "svelte/store"
  import "sanitize.css/sanitize.css"
  import "sanitize.css/assets.css"
  import "sanitize.css/reduce-motion.css"
  import "sanitize.css/typography.css"
  import "../../styles/app.scss"
  import Footer from "$lib/Footer.svelte"
  import Header from "$lib/Header.svelte"

  // $: ({ route } = $page.stuff)
</script>

<Header />
<main class="site-main">
  <div class="container">
    <slot />
  </div>
</main>
<Footer />

<style lang="scss">
  .site-main {
    min-height: calc(100vh - 471px);
  }
</style>
