<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Theatre from "$img/aen_theatre.jpg"
</script>

<section class="mb-large">
  <div class="flex three-col gap-small mb-large">
    <div>
      <h2>{$t("content.art-heading")}</h2>
      <p>{$t("content.art-text")}</p>
    </div>
    <div>
      <h2>{$t("content.music-heading")}</h2>
      <p>{$t("content.music-text")}</p>
    </div>
    <div>
      <h2>{$t("content.theatre-heading")}</h2>
      <p>{$t("content.theatre-text")}</p>
    </div>
  </div>
  <img
    src={Theatre}
    alt="Theatre and Performance at Blackwood Miners Institute with Theatr Iolo"
    class="fw-img block border shadow center"
    width="600"
    height="400"
    decoding="async"
    loading="lazy"
  />
</section>
