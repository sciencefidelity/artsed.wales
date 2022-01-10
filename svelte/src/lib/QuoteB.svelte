<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Blackwood2 from "$img/aen_blackwood_2.jpg"
  import quoteLeft from "../icons/quote-left.svg"
  import quoteRight from "../icons/quote-right.svg"
</script>

<section class="mb-large">
  <div class="quote__container flex border shadow">
    <img
      src={Blackwood2}
      width="600"
      height="400"
      alt="War and Peace at Blackwood Miners Institute"
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
        {$t('content.quote-2')}
        <div class="line-spacer"></div>
        <cite>
          {$t('content.cite-2-p1')}
          <br />
          {$t('content.cite-2-p2')}
        </cite>
      </blockquote>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .quote__text {
    width: 38%;
    @include b.mq(md) {
      width: 100%;
    }
  }

  .img {
    object-position: 50% 0%;
  }
</style>
