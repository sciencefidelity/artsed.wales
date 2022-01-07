<script>
import Language from "$lib/Language.svelte"
import logo from "../icons/logo.svg"

const nameEn = "National Arts and Education Network"
const nameCy = "Rhwydwaith Cenedlaethol Celfyddydau ac Addysg"
const acronEn = "NAEN"
const acronCy = "RCCA"
</script>

<header class="header bg-dark">
  <div class="header--container flex">
    <div class="brand">
      <a sveltekit:prefetch href="/">
        <img alt="NAEN logo" src={logo} width="94" height="94" class="logo" />
      </a>
    </div>

    <div class="name">
      <h1 class="name--en">{nameEn}</h1>
      <h1 class="name--cy">{nameCy}</h1>
      <h1 class="acron--en">{acronEn}</h1>
      <h1 class="acron--cy">{acronCy}</h1>
    </div>
    <Language />
  </div>
</header>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .header {
    margin-bottom: 9.4rem;
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

  .logo {
    width: 94px;
    height: 94px;
    @include b.mq(lg) {
      width: 73px;
      height: 73px;
    }
    @include b.mq(md) {
      width: 60px;
      height: 60px;
    }
    @include b.mq(sm) {
      width: 73px;
      height: 73px;
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
      @include b.mq(lg) {
        font-size: 2.2rem;
      }
      @include b.mq(md) {
        font-size: 1.7rem;
      }
      @include b.mq(sm) {
        display: none;
      }
    }
  }

  .acron {
    &--en,
    &--cy {
      display: none;
      @include b.mq(sm) {
        font-size: 2.2rem;
        display: block;
      }
    }
    &--en {
      @include b.mq(sm) {
        padding-bottom: 0.56rem;
      }
    }
  }
</style>
