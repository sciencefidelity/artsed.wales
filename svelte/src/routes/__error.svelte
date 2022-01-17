<script context="module">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<script lang="ts">
  import { t } from "$lib/translations/index.js"
</script>

<svelte:head>
  <title>{$t("error.header")}</title>
</svelte:head>

<div class="four-oh-four">
  <h1>{$t("error.header")}</h1>
  <p>{$t("error.description")}</p>
  <a sveltekit:prefetch href="/">{$t("error.link")}</a>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  .four-oh-four {
    margin: 5rem 2rem;
  }
</style>
