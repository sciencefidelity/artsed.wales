<script context="module" lang="ts">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Introduction from "$lib/Introduction.svelte"
  import QuoteCard from "$lib/QuoteCard.svelte"
  // import CaseStudies from "$lib/CaseStudies.svelte"
  import Figures from "$lib/Figures.svelte"
  import Artists from "$lib/Artists.svelte"
  import Model from "$lib/Model.svelte"
  import Network from "$lib/Network.svelte"
  // import OurPromise from "$lib/OurPromise.svelte"
  import SignUp from "$lib/SignUp.svelte"
  import Tredegar from "$img/aen_tredegar.jpg"
  import Blackwood2 from "$img/aen_blackwood_2.jpg"
  import SiteSpecific from "$img/aen_outdoor_1.jpg"
</script>

<svelte:head>
  <title>{$t("content.title")}</title>
</svelte:head>

<section>
  <h2 class="responsive-container mt-large mb-large">
    {$t("content.headline")}
  </h2>
</section>
<Introduction />
<Model />
<div class="heading grid mb-large relative text-right">
  <h2 class="inline">
    {$t("content.heading-1")}
  </h2>
  <h2 class="inline">
    {$t("content.heading-2")}
  </h2>
  <h2 class="inline">
    {$t("content.heading-3")}
  </h2>
</div>
<QuoteCard
  image={Tredegar}
  width="600"
  height="380"
  quote={$t("content.quote-1")}
  cite={$t("content.cite-1")}
  --alignCard="0 auto 0 0"
  --direction="row"
  --textWidth="70%"
  --xPosition="35%"
/>
<!-- <CaseStudies /> -->
<Figures />
<QuoteCard
  image={Blackwood2}
  width="600"
  height="400"
  quote={$t("content.quote-2")}
  cite={$t("content.cite-2")}
  --alignCard="0 0 0 auto"
  --direction="row-reverse"
  --textWidth="38%"
  --xPosition="50%"
/>
<SignUp />
<Artists />
<Network />
<!-- <OurPromise /> -->
<section class="mb-large responsive-container">
  <h2 class="pb-small">{$t("content.who-title")}</h2>
  <p>{$t("content.who-text")}</p>
</section>
<img
  src={SiteSpecific}
  alt="Site Specific Arts at Llanchaiach Fawr"
  class="fw-img block border shadow center mb-xl"
  width="600"
  height="400"
  decoding="async"
  loading="lazy"
/>

<!-- prettier-ignore -->
<style lang="scss">

</style>
