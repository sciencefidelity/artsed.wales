<script lang="ts">
  import { t } from "$lib/translations/index.js"
</script>

<section class="legacy__section flex mb-large">
  <div class="legacy__small">
    <small>{$t("content.legacy")}</small>
  </div>
  <div class="figures__layout">
    <div>
      <div class="figure sans bold">782</div>
      <h4 class="figure__cap bold">{$t("content.engagement")}</h4>
    </div>
    <div>
      <div class="figure sans bold">2351</div>
      <h4 class="figure__cap bold">{$t("content.participation")}</h4>
    </div>
    <div>
      <div class="figure sans bold">302</div>
      <h4 class="figure__cap bold">{$t("content.delivered")}</h4>
    </div>
    <div>
      <div class="figure sans bold">10895</div>
      <h4 class="figure__cap bold">{$t("content.community")}</h4>
    </div>
  </div>
</section>

<style lang="scss">
  .legacy__section {
    flex-direction: column;
    // @include b.mq(sm) {
    //   flex-direction: column-reverse;
    //   gap: 5.4rem;
    //   margin: -4.5rem 0 9.9rem 0;
    // }
  }

  .legacy__small {
    margin-bottom: 1.5rem;
    text-align: center;
    // @include b.mq(sm) {
    //   display: none;
    // }
  }

  .figures__layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // @include b.mq(lg) {
    //   grid-template-columns: 1fr 1fr;
    //   width: 77%;
    //   margin: auto;
    // }
    // @include b.mq(md) {
    //   width: 88%;
    // }
    // @include b.mq(sm) {
    //   grid-template-columns: 1fr;
    //   width: 40%;
    //   margin: auto;
    //   text-align: left;
    // }
  }

  .figure {
    font-size: 7.9rem;
    // @include b.mq(xl) {
    //   font-size: 7.2rem;
    // }
    // @include b.mq(md) {
    //   font-size: 6.3rem;
    //   margin: 3.6rem 0 1.8rem 0;
    // }
  }

  .figure__cap {
    font-size: 2.3rem;
    // @include b.mq(xl) {
    //   font-size: 2rem;
    // }
    // @include b.mq(sm) {
    //   font-size: 1.8rem;
    // }
  }
</style>
