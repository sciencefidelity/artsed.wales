<script lang="ts">
  import Footer from "$lib/Footer.svelte"
  import Header from "$lib/Header.svelte"
  import "sanitize.css/sanitize.css"
  import "sanitize.css/assets.css"
  import "sanitize.css/reduce-motion.css"
  import "sanitize.css/typography.css"
  import "../styles/app.scss"
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
