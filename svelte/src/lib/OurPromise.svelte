<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import SiteSpecific from "$img/aen_outdoor_1.jpg"
</script>

<section class="mb-large">
  <h2 class="promiseTitle">{$t('content.promise')}</h2>
  <div class="thirdsLayout mb-large">
    <p>{$t('content.promise-p1')}</p>
    <p>{$t('content.promise-p2')}</p>
    <p>{$t('content.promise-p3')}</p>
  </div>
  <img
    src={SiteSpecific}
    alt="Site Specific Arts at Llanchaiach Fawr"
    class="img block border shadow center mb-large"
    width="600"
    height="400"
    decoding="async"
    loading="lazy"
  />
</section>

<style lang="scss">
  // .promiseTitle {
  //   @include b.mq(md) {
  //     width: 88%;
  //     margin: 1.4rem auto;
  //   }
  // }

  .thirdsLayout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.5rem;
    // @include b.mq(md) {
    //   grid-template-columns: 1fr;
    //   gap: 2em;
    //   width: 88%;
    //   margin: auto;
    // }
    // @include b.mq(sm) {
    //   gap: 1.8rem;
    // }
  }
</style>
