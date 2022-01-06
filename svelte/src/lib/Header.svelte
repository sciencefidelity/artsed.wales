<script>
import Language from "$lib/Language.svelte"
import logo from "../icons/logo.svg"

// const brandEn = "National Arts and Education Network"
// const brandCy = "Rhwydwaith Cenedlaethol Celfyddydau ac Addysg"
</script>

<header>
  <div class="headerContainer">
    <div class="brandContainer">
      <a sveltekit:prefetch href="/">
        <img alt="" src={logo} width="94" height="94" style="margin: 0;" />
      </a>
    </div>

    <div class="nameContainer">
      <h1 class="nameEn">National Arts and Education Network</h1>
      <h1 class="nameCy">Rhwydwaith Cenedlaethol Celfyddydau ac Addysg</h1>
    </div>
    <Language />
  </div>
</header>

<!-- prettier-ignore -->
<style lang="scss">
  header {
    margin-bottom: 9.4rem;
    background-color: var(--grey-950);
  }

  .headerContainer {
    display: flex;
    margin: 0 auto;
  }

  .brandContainer {
    align-items: center;
    padding: 0.6em;
    margin: 0 0.5em -0.28em;
  }

  .nameContainer {
    display: flex;
    flex-direction: column;
    align-self: center;
  }

  .nameEn {
    padding-bottom: 0.72rem;
    margin: 0;
    letter-spacing: 0;
  }
</style>
