<script lang="ts">
  import { t } from "$lib/translations/index.js"
  // import Image from "$lib/Image.svelte"
  import Blackwood1 from "$img/aen_blackwood_1.jpg"
  // import imgData from "$img/aen_blackwood_1.jpg?w=400&h=300&webp"
</script>

<section class="introduction mb-large">
  <div class="split-container">
    <div class="split-text">
      <p>{$t('content.introduction-1')}</p>
      <p>{$t('content.introduction-2')}</p>
    </div>
    <div class="side-image block border shadow">
      <!-- <Image
        data={imgData}
        alt="War and Peace at Blackwood Miners Institute"
      /> -->
      <img
        src={Blackwood1}
        alt="War and Peace at Blackwood Miners Institute"
        class="img cover h-100"
        width="600"
        height="400"
        decoding="async"
        loading="lazy"
      />
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  // .introduction {
  //   @include b.mq(sm) {
  //     margin-bottom: 3.2rem;
  //   }
  // }

  // .side-image {
  //   @include b.mq(sm) {
  //     width: 88%;
  //     margin: 0 auto 3rem;
  //   }
  // }

  .img {
    object-position: 25% 50%;
  }
</style>
