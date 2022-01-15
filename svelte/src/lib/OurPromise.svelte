<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import SiteSpecific from "$img/aen_outdoor_1.jpg"
</script>

<section class="mb-large">
  <h2 class="responsive-container pb-small">{$t('content.promise')}</h2>
  <div class="flex three-col gap-small mb-large">
    <div><p>{$t('content.promise-p1')}</p></div>
    <div><p>{$t('content.promise-p2')}</p></div>
    <div><p>{$t('content.promise-p3')}</p></div>
  </div>
  <img
    src={SiteSpecific}
    alt="Site Specific Arts at Llanchaiach Fawr"
    class="fw-img block border shadow center mb-large"
    width="600"
    height="400"
    decoding="async"
    loading="lazy"
  />
</section>
