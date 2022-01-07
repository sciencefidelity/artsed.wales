<script>
import Language from "$lib/Language.svelte"
import logo from "../icons/logo.svg"

const brandEn = "National Arts and Education Network"
const brandCy = "Rhwydwaith Cenedlaethol Celfyddydau ac Addysg"
</script>

<header class="header">
  <div class="header--container">
    <div class="brand">
      <a sveltekit:prefetch href="/">
        <img alt="" src={logo} width="94" height="94" style="margin: 0;" />
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
    background-color: var(--grey-950);
    &--container {
      display: flex;
      margin: 0 auto;
    }
    @include b.mq(xl) {
      margin-bottom: 0.2rem;
    }
  }

  .brand {
    align-items: center;
    padding: 0.6em;
    margin: 0 0.5em 0.06em;
    @include b.mq(xl) {
      padding: 0;
      margin: 0.6em 0.7em 0;
      img {
        width: 65px;
        height: 65px;
      }
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    align-self: center;
    &--en {
      padding-bottom: 0.72rem;
      margin: 0;
      letter-spacing: 0;
    }
    &--en,
    &--cy {
      @include b.mq(xl) {
        font-size: 0.98em;
      }
    }
  }
</style>
