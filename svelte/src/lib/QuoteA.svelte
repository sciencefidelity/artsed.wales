<script lang="ts">
  import { t } from "$lib/translations/index.js"
  // import Image from "$lib/Image.svelte"
  import Tredegar from "$img/aen_tredegar.jpg"
  import quoteLeft from "../icons/quote-left.svg"
  import quoteRight from "../icons/quote-right.svg"
</script>

<section class="quote__section mb-large">
  <div class="quote__container flex border shadow">
    <img
      src={Tredegar}
      width="600"
      height="380"
      alt=""
      class="img cover of-hidden"
      decoding="async"
      loading="lazy"
    />
    <div class="quote__text relative card-padding bg-light">
      <img
        alt="Quote Left"
        src={quoteLeft}
        class="quote-left absolute"
      />
      <img
        alt="Quote Right"
        src={quoteRight}
        class="quote-right absolute"
      />
      <blockquote>
        {$t('content.quote-1')}
        <div class="line-spacer"></div>
        <cite>{$t('content.cite-1')}</cite>
      </blockquote>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  // .quote {
  //   @include b.mq(sm) {
  //     margin-bottom: 8.5rem;
  //   }
  // }

  .quote__container {
    width: 85%;
    min-width: 8.5rem;
    margin-right: auto;
    // @include b.mq(lg) {
    //   min-width: 0;
    //   width: 100%;
    //   display: grid;
    //   grid-template-columns: auto auto;
    // }
    // @include b.mq(md) {
    //   min-width: 0;
    //   width: 100%;
    //   display: grid;
    //   grid-template-columns: auto auto;
    // }
    // @include b.mq(sm) {
    //   grid-template-columns: 1fr;
    //   min-width: 0;
    //   width: 100%;
    // }
  }

  .quote__text {
    // @extend %quote;
    width: 70%;
  }

  // %quote {
  //   @include b.mq(lg) {
  //     width: 100%;
  //     padding: 2.5rem 1.5rem 1rem 3.5rem;
  //   }
  //   @include b.mq(md) {
  //     width: 100%;
  //     padding: 2.5rem 1.5rem 1rem 2rem;
  //   }
  // }

  .img {
    object-position: 25% 50%;
  }
</style>
