<script context="module" lang="ts">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Introduction from "$lib/Introduction.svelte"
</script>

<svelte:head>
  <title>National Arts and Education Network</title>
</svelte:head>

<main>
  <section>
    <h2 class="headline">{$t('content.headline')}</h2>
  </section>
  <Introduction />
</main>

<!-- prettier-ignore -->
<style lang="scss">

</style>
