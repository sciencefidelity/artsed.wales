<script lang="ts">
  import { t } from "$lib/translations"
</script>

<nav class="nav flex column ml-auto">
  <div class="nav--item h1 sans">
    <a href={$t("content.locale-2")}
      sveltekit:prefetch
      class="nav--link fg-light">
      {$t("content.lang-2")}
    </a>
  </div>
  <div class="nav--item h1 sans">
    <a href="/courses"
      sveltekit:prefetch
      class="nav--link fg-light">
      {$t("content.lang-2")}
    </a>
  </div>
</nav>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;
  .nav {
    align-items: right;
    justify-content: center;
  }
  .nav--item {
    // align-items: center;
    // font-size: 6.3rem;
    margin-right: 4.5rem;
    line-height: 1.3;
    text-align: right;
    // @include b.mq(lg) {
    //   margin-right: 3.5rem;
    //   font-size: 4.9rem;
    // }
    // @include b.mq(md) {
    //   margin-right: 2.6rem;
    //   font-size: 3.7rem;
    // }
    // @include b.mq(sm) {
    //   margin-right: 3.5rem;
    //   font-size: 4.9rem;
    // }
  }

  .nav--link {
    text-decoration: none;
  }
</style>
