<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import Icon from "$lib/Icon.svelte"
  // import ampersand from "../icons/ampersand.svg"
</script>

<section class="mb-large">
  <div class="flex">
    <div class="venn__text">
      <h2 class="venn__heading">{$t('content.model')}</h2>
      <p class="venn-p1">{$t('content.model-p1')}</p>
      <p>{$t('content.model-p2')}</p>
      <p>{$t('content.model-p3')}</p>
    </div>
    <div class="venn__diagram">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="circle-4"></div>
      <div class="circle-5"></div>
      <div class="circle-6"></div>

      <div class="content-1">{$t('content.model-1')}</div>
      <div class="content-2">{$t('content.model-2')}</div>
      <div class="content-3">
        {$t('content.model-3')}
        <br />
        {$t('content.model-4')}
      </div>
      <div class="content-4">{$t('content.model-5')}</div>

      <div>
<!--         <img
          alt="Ampersand Logo"
          src={ampersand}
          class="ampersand"
        /> -->
        <Icon name="ampersand" width="89"
        height="100" class="ampersand absolute fg-white" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use "../styles/foundation/breakpoints" as b;

  :root {
    --vennOpacity: 0.65;
    --vennBlend: difference;
  }

  .venn__text {
    width: 33.33%;
    margin-right: -4%;
  }

  .venn-p1 {
    margin-right: -15%;
  }

  .venn__heading {
    line-height: 0.6;
    padding-bottom: 1.8rem;
  }

  .venn__diagram {
    position: relative;
    width: 72.66%;
    margin-left: auto;
    margin-bottom: -7rem;
  }

  %all-content {
    position: absolute;
    color: var(--grey-000);
    font-family: var(--sans);
    font-size: 3.2rem;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .content-1 {
    @extend %all-content;
    top: 18%;
    left: 50%;
  }

  .content-2 {
    @extend %all-content;
    top: 67%;
    left: 21%;
  }

  .content-3 {
    @extend %all-content;
    line-height: 1.2;
    top: 67%;
    left: 78%;
  }

  .content-4 {
    @extend %all-content;
    top: 55%;
    left: 50%;
  }

  // .ampersand {
  //   position: absolute;
  //   width: 3.78em;
  //   margin: 0;
  //   transform: translate(-46%, -45%);
  //   top: 45%;
  //   left: 50%;
  // }

  %white-circles {
    background-color: white;
    position: absolute;
    width: 60.59%;
    border-radius: 50%;
  }

  .circle-1 {
    @extend %white-circles;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .circle-2 {
    @extend %white-circles;
    bottom: 10.02%;
    left: 2.41%;
  }

  .circle-3 {
    @extend %white-circles;
    bottom: 10.02%;
    right: 2.41%;
  }

  %top-circles {
    mix-blend-mode: var(--vennBlend);
    opacity: var(--vennOpacity);
    position: absolute;
    width: 60.59%;
    border-radius: 50%;
  }

  .circle-4 {
    @extend %top-circles;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #33CC66;
  }

  .circle-5 {
    @extend %top-circles;
    bottom: 10.02%;
    right: 2.41%;
    background-color: #FF3333;
  }

  .circle-6 {
    @extend %top-circles;
    bottom: 10.02%;
    left: 2.41%;
    background-color: #0099FF;
  }

  .venn__diagram::after,
  .circle-1::after,
  .circle-2::after,
  .circle-3::after,
  .circle-4::after,
  .circle-5::after,
  .circle-6::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
</style>
