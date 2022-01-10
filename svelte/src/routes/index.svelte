<script context="module" lang="ts">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Introduction from "$lib/Introduction.svelte"
  import QuoteA from "$lib/QuoteA.svelte"
</script>

<svelte:head>
  <title>{$t('content.title')}</title>
</svelte:head>

<section>
  <h2 class="mt-large mb-large">{$t('content.headline')}</h2>
</section>
<Introduction />
<div class="heading grid mb-large relative">
  <h2 class="inline">
    {$t('content.heading-1')},{" "}
  </h2>
  <h2 class="inline">
    {$t('content.heading-2')},{" "}
  </h2>
  <h2 class="inline">
    {$t('content.heading-3')}
  </h2>
</div>
<QuoteA />

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .heading {
    @include b.mq(md) {
      width: 88%;
      margin-right: auto;
      margin-left: auto;
    }
    @include b.mq(sm) {
      width: 100%;
    }
  }
</style>
