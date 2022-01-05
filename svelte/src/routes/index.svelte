<script context="module" lang="ts">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<script lang="ts">
  import { onMount } from "svelte"

  let count = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<svelte:head>
  <title>National Arts and Education Network</title>
</svelte:head>

<section class="home">

</section>

<!-- prettier-ignore -->
<style lang="scss">

</style>
