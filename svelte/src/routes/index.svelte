<script context="module" lang="ts">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Introduction from "$lib/Introduction.svelte"
  // import QuoteA from "$lib/QuoteA.svelte"
  import QuoteCard from "$lib/QuoteCard.svelte"
  import CaseStudies from "$lib/CaseStudies.svelte"
  import Figures from "$lib/Figures.svelte"
  // import QuoteB from "$lib/QuoteB.svelte"
  import Artists from "$lib/Artists.svelte"
  import Model from "$lib/Model.svelte"
  import Network from "$lib/Network.svelte"
  import OurPromise from "$lib/OurPromise.svelte"
  import SignUp from "$lib/SignUp.svelte"

  import Tredegar from "$img/aen_tredegar.jpg"
  import Blackwood2 from "$img/aen_blackwood_2.jpg"
</script>

<svelte:head>
  <title>{$t("content.title")}</title>
</svelte:head>

<section>
  <h2 class="mt-large mb-large">{$t("content.headline")}</h2>
</section>
<Introduction />
<div class="heading grid mb-large relative">
  <h2 class="inline">
    {$t("content.heading-1")},{" "}
  </h2>
  <h2 class="inline">
    {$t("content.heading-2")},{" "}
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
  --textWidth="70%"
  --xPosition="35%"
/>
<CaseStudies />
<Figures />
<QuoteCard
  image={Blackwood2}
  width="600"
  height="400"
  quote={$t("content.quote-2")}
  cite={$t("content.cite-2")}
  --textWidth="38%"
  --xPosition="50%"
/>
<!-- <QuoteB /> -->
<Artists />
<Model />
<Network />
<OurPromise />
<SignUp />
<section class="mb-large">
  <h2>
    {$t("content.who-title")}
  </h2>
  <p>
    {$t("content.who-text")}
  </p>
</section>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .heading {
    @include b.mq(md) {
      width: 88%;
      margin-right: auto;
      margin-left: auto;
    }
    @include b.mq(sm) {
      width: 100%;
    }
  }
</style>
