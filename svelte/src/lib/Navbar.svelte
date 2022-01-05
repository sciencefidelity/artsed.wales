<script lang="ts">
  import { page } from "$app/stores"
</script>

<nav class="nav">
  <ul>
    <li class:active={$page.path === "/"}>
      <a sveltekit:prefetch href="/">Home</a>
    </li>
    <li class:active={$page.path === "/counter"}>
      <a sveltekit:prefetch href="/counter">Counter</a>
    </li>
    <li class:active={$page.path === "/about"}>
      <a sveltekit:prefetch href="/about">About</a>
    </li>
  </ul>
</nav>

<!-- prettier-ignore -->
<style lang="scss">
  .nav {
    display: grid;
    place-items: center;
    width: 100%;
    padding: 1rem 2rem;
    font-weight: 600;
    color: var(--background);
    text-align: center;
    background-color: var(--red);
    .active {
      text-decoration: underline;
    }
    a {
      color: var(--background);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        padding: 0 2rem;
      }
    }
  }
</style>
