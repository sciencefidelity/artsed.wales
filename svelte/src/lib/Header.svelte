<script>
import Language from "$lib/Language.svelte"
import logo from "../icons/logo.svg"

const brandEn = "National Arts and Education Network"
const brandCy = "Rhwydwaith Cenedlaethol Celfyddydau ac Addysg"
</script>

<header class="header bg-dark">
  <div class="header--container flex">
    <div class="brand">
      <a sveltekit:prefetch href="/">
        <img alt="NAEN logo" src={logo} width="94" height="94" class="logo" />
      </a>
    </div>

    <div class="name">
      <h1 class="name--en">{brandEn}</h1>
      <h1 class="name--cy">{brandCy}</h1>
    </div>
    <Language />
  </div>
</header>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .header {
    margin-bottom: 9.4rem;
    @include b.mq(xl) {
      margin-bottom: 0.2rem;
    }
  }

  .brand {
    padding: 0.6em;
    margin: 0 0.5em 0.06em;
    // place-items: center;
    @include b.mq(xl) {
      margin: 0.6em 0.7em 0;
    }
  }

  .logo {
    width: 94;
    height: 94;
    @include b.mq(xl) {
      width: 65px;
      height: 65px;
    }
  }

  .name {
    align-self: center;
    &--en {
      padding-bottom: 0.72rem;
    }
    &--en,
    &--cy {
      @include b.mq(xl) {
        font-size: 0.98em;
      }
    }
  }
</style>
