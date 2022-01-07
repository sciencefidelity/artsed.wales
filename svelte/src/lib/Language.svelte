<script lang="ts">
  const languageName = {
    en: "EN",
    cy: "CY"
  }
</script>

<div class="language--switcher">
  <a href="/" class="language--link">{languageName.cy}</a>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .language--switcher {
    display: flex;
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

  .language--link {
    color: var(--beige-150);
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    // @include b.mq(lg) {
    //   margin-bottom: 0.2rem;
    // }
  }
</style>
