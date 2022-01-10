<script lang="ts">
  import { t } from "$lib/translations/index.js"
</script>


<section class="mb-large">
  <div class="half-layout grid">
    <div>
      <h2>{$t('content.artists-heading')}</h2>
      <p>{$t('content.artists-text')}</p>
    </div>
    <div>
      <h2>{$t('content.creators-heading')}</h2>
      <p>
        {$t('content.creators-text')}
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .half-layout {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    // @include b.mq(md) {
    //   grid-template-columns: 1fr;
    //   width: 80%;
    //   margin: auto;
    // }
    // @include b.mq(sm) {
    //   width: 88%;
    // }
  }
</style>
