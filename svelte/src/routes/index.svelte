<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import { onMount } from "svelte"
  import logo from "../assets/logo.svg"

  let count = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="home">
  <h1>Home</h1>
  <img src={logo} class="logo" alt="logo" />
  <p>Page has been open for <code>{count}</code> seconds.</p>
  <a
    class="App-link"
    href="https://svelte.dev"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn Svelte
  </a>
</section>

<!-- prettier-ignore -->
<style lang="scss">
  @keyframes logo-pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }

  .home {
    margin: 5rem 0;
    text-align: center;
    p {
      margin: 0.4rem;
    }
  }

  .logo {
    height: 36vmin;
    margin: 3rem;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: logo-pulse infinite 1.6s ease-in-out alternate;
    }
  }
</style>
