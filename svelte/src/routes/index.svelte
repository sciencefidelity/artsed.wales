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
  <title>National Arts and Education Network</title>
</svelte:head>

<section>
  <h2 class="headline mt-large mb-large">{$t('content.headline')}</h2>
</section>
<Introduction />
<div class="heading__container mb-large relative">
  <h2 class="heading inline">
    {$t('content.heading-1')},{" "}
  </h2>
  <h2 class="heading inline">
    {$t('content.heading-2')},{" "}
  </h2>
  <h2 class="heading inline">
    {$t('content.heading-3')}
  </h2>
</div>
<QuoteA />

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .headline {
    letter-spacing: 0;
    // @include b.mq(lg) {
    //   margin: 9.2rem auto 9rem;
    // }
    // @include b.mq(sm) {
    //   width: 88%;
    //   font-size: 3rem;
    //   margin: 7.2rem auto 6.8rem;
    // }
  }

  // .heading__container {
  //   @include b.mq(sm) {
  //     width: 88%;
  //     margin-left: auto;
  //     margin-right: auto;
  //     margin-bottom: 8rem;
  //   }
  // }

  // .heading {
  //   @include b.mq(sm) {
  //     display: block;
  //     width: 70%;
  //     margin: 0 auto 1.3rem;
  //   }
  // }
</style>
