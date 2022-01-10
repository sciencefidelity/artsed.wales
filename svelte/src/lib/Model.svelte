<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import ampersand from "../icons/ampersand.svg"
</script>

<section class="modelSection">
  <div class="vennContainer">
    <div class="vennText">
      <h2 class="vennHeading">{$t('content.model')}</h2>
      <p class="vennP1">{$t('content.model-p1')}</p>
      <p>{$t('content.model-p2')}</p>
      <p>{$t('content.model-p3')}</p>
    </div>
    <div class="vennDiagram">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
      <div class="circle6"></div>

      <div class="content1">{$t('content.model-1')}</div>
      <div class="content2">{$t('content.model-2')}</div>
      <div class="content3">
        {$t('content.model-3')}
        <br />
        {$t('content.model-4')}
      </div>
      <div class="content4">{$t('content.model-5')}</div>

      <div>
        <img
          alt="Ampersand Logo"
          src={ampersand}
          class="ampersand"
        />
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

  .vennContainer {
    display: flex;
  }

  .vennText {
    width: 33.33%;
    margin-right: -4%;
  }

  .vennP1 {
    margin-right: -15%;
  }

  .vennHeading {
    line-height: 0.6;
    padding-bottom: 1.8rem;
  }

  .vennDiagram {
    position: relative;
    width: 72.66%;
    margin-left: auto;
  }

  %allContent {
    position: absolute;
    color: var(--grey-000);
    font-family: var(--sans);
    font-size: 3.2rem;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .content1 {
    @extend %allContent;
    top: 18%;
    left: 50%;
  }

  .content2 {
    @extend %allContent;
    top: 67%;
    left: 21%;
  }

  .content3 {
    @extend %allContent;
    line-height: 1.2;
    top: 67%;
    left: 78%;
  }

  .content4 {
    @extend %allContent;
    top: 55%;
    left: 50%;
  }

  .ampersand {
    position: absolute;
    width: 3.78em;
    margin: 0;
    transform: translate(-46%, -45%);
    top: 45%;
    left: 50%;
  }

  %whiteCircles {
    background-color: white;
    position: absolute;
    width: 60.59%;
    border-radius: 50%;
  }

  .circle1 {
    @extend %whiteCircles;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .circle2 {
    @extend %whiteCircles;
    bottom: 10.02%;
    left: 2.41%;
  }

  .circle3 {
    @extend %whiteCircles;
    bottom: 10.02%;
    right: 2.41%;
  }

  %topCircles {
    mix-blend-mode: var(--vennBlend);
    opacity: var(--vennOpacity);
    position: absolute;
    width: 60.59%;
    border-radius: 50%;
  }

  .circle4 {
    @extend %topCircles;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #33CC66;
  }

  .circle5 {
    @extend %topCircles;
    bottom: 10.02%;
    right: 2.41%;
    background-color: #FF3333;
  }

  .circle6 {
    @extend %topCircles;
    bottom: 10.02%;
    left: 2.41%;
    background-color: #0099FF;
  }

  .vennDiagram::after,
  .circle1::after,
  .circle2::after,
  .circle3::after,
  .circle4::after,
  .circle5::after,
  .circle6::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
</style>
