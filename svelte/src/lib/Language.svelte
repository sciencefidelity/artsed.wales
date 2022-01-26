<script lang="ts">
  import { t } from "$lib/translations"
</script>

<nav class="nav flex column ml-auto">
  <div class="nav--item h1 sans">
    <a href={$t("content.locale-2")}
      sveltekit:prefetch
      class="nav--link fg-light">
      <div class="inline-block arrow-left">
        {" "}{$t("content.lang-2")}
      </div>
    </a>
  </div>
  <div class="nav--item h1 sans">
    <a href="/courses"
      sveltekit:prefetch
      class="nav--link fg-light">
        <div class="inline-block arrow-right">
          {$t("content.nav-item")}{" "}
        </div>
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
    margin-right: 4.5rem;
    line-height: 1.3;
    text-align: right;
  }

  .nav--link {
    text-decoration: none;
  }
</style>
