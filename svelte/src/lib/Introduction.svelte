<script lang="ts">
  import { t } from "$lib/translations/index.js"
</script>

<section class="introduction">
  <div class="split-container">
    <div class="split-text">
      <p>{$t('content.introduction-1')}</p>
      <p>{$t('content.introduction-2')}</p>
    </div>
    <div class="side-image">
      <img
        src="/img/aen_blackwood_1.jpg"
        sizes="(min-width: 600px) 600px, 100vw"
        alt=""
        class="cover h-100"
        decoding="async"
        loading="lazy"
      />
    </div>
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

  .side-image {
    display: block;
    border: var(--border);
    box-shadow: var(--shadow);
    img {
      object-position: 30% 50%;
    }
    // @include b.mq(sm) {
    //   width: 88%;
    //   margin: 0 auto 3rem;
    // }
  }
</style>
