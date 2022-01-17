<script context="module">
  import { browser, dev } from "$app/env"

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
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
