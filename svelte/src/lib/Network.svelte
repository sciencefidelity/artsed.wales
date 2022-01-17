<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Networking from "$img/aen_network.jpg"
</script>

<section class="mb-large">
  <div class="split-container">
    <div class="side-image block border shadow">
      <img
        src={Networking}
        alt="Networking event at the Riverfront"
        class="img cover h-100"
        width="600"
        height="400"
        decoding="async"
        loading="lazy"
      />
    </div>
    <div class="split-text">
      <h2 class="pb-small">{$t("content.network-heading")}</h2>
      <p>{$t("content.network-text")}</p>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .img {
    object-position: 50% 50%;
  }

  .side-image {
    margin-bottom: 1rem;
  }
</style>
