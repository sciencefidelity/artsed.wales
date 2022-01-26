<script lang="ts">
  import Language from "$lib/Language.svelte"
  import Icon from "$lib/Icon.svelte"
  import { t } from "$lib/translations"
  // import logo from "../icons/logo.svg"
</script>

<header class="bg-dark">
  <div class="header--container flex">
    <div class="brand">
      <a sveltekit:prefetch href="/">
<!--         <img alt="NAEN logo" src={logo} width="94px" height="94px" class="logo fg-light fill-light" /> -->
        <Icon name="logo" width="94" height="94" class="logo fg-light" />
      </a>
    </div>

    <div class="name">
      <h1 class="name--en">{$t("content.title-en")}</h1>
      <h1 class="name--cy">{$t("content.title-cy")}</h1>
      <h1 class="acron--en hide">{$t("content.acron-en")}</h1>
      <h1 class="acron--cy hide">{$t("content.acron-cy")}</h1>
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

  // .logo {
  //   width: 94px;
  //   height: 94px;
  //   @include b.mq(lg) {
  //     width: 73px;
  //     height: 73px;
  //   }
  //   @include b.mq(md) {
  //     width: 60px;
  //     height: 60px;
  //   }
  //   @include b.mq(sm) {
  //     width: 73px;
  //     height: 73px;
  //   }
  // }

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
