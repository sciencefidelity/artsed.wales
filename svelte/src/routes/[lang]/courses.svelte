<script context="module" lang="ts">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<script lang="ts">
  import { t } from "$lib/translations"
</script>

<svelte:head>
  <title>{$t("content.nav-item")}</title>
</svelte:head>

<!-- prettier-ignore -->
<style lang="scss">

</style>
