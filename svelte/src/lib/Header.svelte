<script lang="ts">
  import Language from "$lib/Language.svelte"
  import Icon from "$lib/Icon.svelte"
  import { t } from "$lib/translations"
</script>

<header class="bg-dark">
  <div class="header--container flex">
    <div class="brand">
      <a sveltekit:prefetch href="/">
        <Icon name="logo" width="94" height="94" class="logo fg-light" />
      </a>
    </div>

    <div class="name">
      <h1 class="name--en">{$t("content.title-1")}</h1>
      <h1 class="name--cy">{$t("content.title-2")}</h1>
      <h1 class="acron--en hide">{$t("content.acron-1")}</h1>
      <h1 class="acron--cy hide">{$t("content.acron-2")}</h1>
    </div>
    <Language />
  </div>
</header>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .header--container {
    max-width: 110rem;
    margin: auto;
  }

  .brand {
    padding: 1.2rem;
    margin: 0 1rem 0.1rem;
    @include b.mq(lg) {
      padding: 0.93rem;
      margin: 0 0.77rem 0.077rem;
    }
    @include b.mq(md) {
      padding: 0.7rem;
      margin: 0 0.58rem 0.058rem;
    }
    @include b.mq(sm) {
      padding: 0.93rem;
      margin: 0 0.77rem 0.077rem;
    }
  }

  .name {
    align-self: center;
    &--en {
      padding-bottom: 0.72rem;
      @include b.mq(lg) {
        padding-bottom: 0.56rem;
      }
      @include b.mq(md) {
        padding-bottom: 0.42rem;
      }
    }
    &--en,
    &--cy {
      @include b.mq(sm) {
        display: none;
      }
    }
  }

  .acron {
    &--en,
    &--cy {
      @include b.mq(sm) {
        display: block;
      }
    }
    &--en {
      padding-bottom: 0.56rem;
    }
  }
</style>
