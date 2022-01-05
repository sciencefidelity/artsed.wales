<script context="module">
  import { browser, dev } from "$app/env"

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true
</script>

<svelte:head>
  <title>Not Found</title>
</svelte:head>

<div class="four-oh-four">
  <h1>404 Not Found</h1>
  <p>
    You've hit a path that does not exist,
    <br />
    oh the sadness!
  </p>
  <a sveltekit:prefetch href="/">Home</a>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  .four-oh-four {
    margin: 5rem 2rem;
  }
</style>
