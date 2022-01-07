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

<section>
  <h2 class="headline">{$t('content.headline')}</h2>
</section>
<Introduction />

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .headline {
    margin-top: 9.2rem;
    margin-bottom: 9rem;
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
</style>
