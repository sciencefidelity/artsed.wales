<script lang="ts">
  import { t } from "$lib/translations/index.js"
</script>

<section class="introduction">
  <div class="split-container">
    <div class="split-text">
      <p>{$t('content.introduction-1')}</p>
      <p>{$t('content.introduction-2')}</p>
    </div>
    <img
      src="/img/aen_blackwood_1.jpg"
      width="600"
      height="400"
      alt=""
      class="side-image"
    />
  </div>
</section>

<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .introduction {
    margin-bottom: 6.5rem;
    // @include b.mq(sm) {
    //   margin-bottom: 3.2rem;
    // }
  }
</style>
