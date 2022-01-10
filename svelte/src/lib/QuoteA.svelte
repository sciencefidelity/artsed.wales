<script lang="ts">
  import { t } from "$lib/translations/index.js"
  // import Image from "$lib/Image.svelte"
  import Tredegar from "$img/aen_tredegar.jpg"
  import quoteLeft from "../icons/quote-left.svg"
  import quoteRight from "../icons/quote-right.svg"
</script>

<section class="mb-large">
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

  .quote__container {
    max-width: 85rem;
    min-width: 8.5rem;
    margin-right: auto;
    @include b.mq(lg) {
      min-width: 0;
      width: 100%;
    }
    @include b.mq(md) {
      flex-direction: column;
      width: 88%;
      margin: auto;
    }
    @include b.mq(sm) {
      width: 100%;
    }
  }

  .quote__text {
    width: 70%;
    @include b.mq(md) {
      width: 100%;
    }
  }

  .img {
    object-position: 35% 50%;
  }
</style>
