<script lang="ts">
  const languageName = {
    en: "EN",
    cy: "CY"
  }
</script>

<div class="lang--switch flex">
  <a href="/" class="lang--link">{languageName.cy}</a>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .lang--switch {
    font-family: var(--sans);
    text-transform: uppercase;
    align-items: center;
    font-size: 6.3rem;
    letter-spacing: 0.02rem;
    margin: 0 4.5rem 0 auto;
    @include b.mq(lg) {
      margin: -0.2rem 1.2rem 0.2rem auto;
      font-size: 3.5rem;
    }
  }

  .lang--link {
    color: var(--beige-150);
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    line-height: 1;
    @include b.mq(lg) {
      margin-bottom: 0.2rem;
    }
  }
</style>
