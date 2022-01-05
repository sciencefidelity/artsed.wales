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

<script lang="ts">
  let count = 0
  const decrement = () => {
    count -= 1
  }
  const increment = () => {
    count += 1
  }
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="counter">
  <h1>Counter</h1>
  <button on:click={decrement}>–</button>
  <div class="count">{count}</div>
  <button on:click={increment}>+</button>
  <p>
    The button has been pushed <code>{count}</code> times.
  </p>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  .counter {
    margin: 5rem 0;
    text-align: center;
    p {
      margin: 0.4rem;
    }
  }

  button {
    width: 6rem;
    height: 6rem;
    margin: 3rem 0.2rem;
    font-size: 3rem;
    color: var(--dark-green);
    border: 0;
  }

  .count {
    display: inline-block;
    width: 10rem;
    font-size: 3rem;
    font-weight: bold;
    color: var(--dark-green);
  }
</style>
