<script lang="ts">
  import "sanitize.css/sanitize.css"
  import "sanitize.css/assets.css"
  import "sanitize.css/reduce-motion.css"
  import "sanitize.css/typography.css"
  import "../../styles/app.scss"
  import Footer from "$lib/Footer.svelte"
  import Header from "$lib/Header.svelte"
</script>

<Header />
<main class="site-main">
  <div class="container">
    <slot />
  </div>
</main>
<Footer />

<style lang="scss">
  .site-main {
    min-height: calc(100vh - 471px);
  }
</style>
