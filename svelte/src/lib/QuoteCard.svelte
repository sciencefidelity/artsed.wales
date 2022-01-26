<script lang="ts">
  // import Image from "$lib/Image.svelte"
  import Icon from "$lib/Icon.svelte"
  // import quoteLeft from "../icons/quote-left.svg"
  // import quoteRight from "../icons/quote-right.svg"
  export let image: string
  export let width: string
  export let height: string
  export let quote: string
  export let cite: string
</script>

<section class="quote mb-large">
  <div class="quote__container flex border shadow">
    <img
      src={image}
      width={width}
      height={height}
      alt="Spoken Word at Tredegar House"
      class="img cover of-hidden"
      decoding="async"
      loading="lazy"
    />
    <div class="quote__text relative card-padding bg-light">
      <!-- <img
        alt="Quote Left"
        src={quoteLeft}
        class="quote-left absolute"
      /> -->
      <!-- <img
        alt="Quote Right"
        src={quoteRight}
        class="quote-right absolute"
      /> -->
      <Icon
        name="quoteLeft"
        width="100"
        height="73"
        class="quote-left absolute fg-white"
      />
      <Icon
       name="quoteRight"
       width="100"
       height="73"
       class="quote-right absolute fg-white"
      />
      <blockquote>
        {quote}
        <div class="line-spacer"></div>
        <cite>{cite}</cite>
      </blockquote>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .quote__container {
    max-width: 85rem;
    min-width: 8.5rem;
    // margin-right: auto;
    margin: var(--alignCard);
    flex-direction: var(--direction);
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
    width: var(--textWidth);
    @include b.mq(md) {
      width: 100%;
    }
  }

  .img {
    object-position: var(--xPosition) 50%;
  }
</style>
