<script lang="ts">
  import { t } from "$lib/translations/index.js"
  // import Image from "$lib/Image.svelte"
  import Blackwood1 from "$img/aen_blackwood_1.jpg"
  // import Blackwood1 from "$img/aen_blackwood_1.jpg?w=400&h=300&webp"
</script>

<section class="introduction">
  <div class="split-container">
    <div class="split-text">
      <p>{$t('content.introduction-1')}</p>
      <p>{$t('content.introduction-2')}</p>
    </div>
    <div class="side-image">
      <!-- <Image
        data={Blackwood1}
        alt=""
      /> -->
      <img
        src={Blackwood1}
        alt=""
        class="img cover w-100"
        sizes="(min-width: 600px) 600px, 100vw"
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
    // @include b.mq(sm) {
    //   width: 88%;
    //   margin: 0 auto 3rem;
    // }
  }

  .img {
    object-position: 25% 50%;
  }
</style>
