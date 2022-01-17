<script lang="ts">
  import { t } from "$lib/translations"
</script>

<div sveltekit:prefetch class="lang--switch flex ml-auto sans">
  <a href={$t("content.locale-2")} class="lang--link fg-light">
    {$t("content.locale-2")}
  </a>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .lang--switch {
    text-transform: uppercase;
    align-items: center;
    font-size: 6.3rem;
    letter-spacing: 0.02rem;
    margin-right: 4.5rem;
    @include b.mq(lg) {
      margin-right: 3.5rem;
      font-size: 4.9rem;
    }
    @include b.mq(md) {
      margin-right: 2.6rem;
      font-size: 3.7rem;
    }
    @include b.mq(sm) {
      margin-right: 3.5rem;
      font-size: 4.9rem;
    }
  }

  .lang--link {
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    line-height: 1;
  }
</style>
