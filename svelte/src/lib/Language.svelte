<script lang="ts">
  const languageName = {
    en: "EN",
    cy: "CY"
  }
</script>

<div class="language--switcher">
<!--   <IntlContextConsumer>
    {({ languages, language: currentLocale }) =>
      languages.map(language => (
        <a
          key={language}
          onClick={() => changeLocale(language)}
          class="language--link"
          style={{
            display: currentLocale === language ? "none" : "flex"
          }}
        >
          {languageName[language]}
        </a>
      ))
    }
  </IntlContextConsumer> -->
</div>

<!-- prettier-ignore -->
<style lang="scss">
  .language--switcher {
    display: flex;
    font-family: var(--sans);
    text-transform: uppercase;
    align-items: center;
    font-size: 6.3rem;
    letter-spacing: 0.02rem;
    margin: 0 4.5rem 0 auto;
  }
  .language--link {
    color: var(--beige-150);
    cursor: pointer;
    user-select: none;
  }
</style>
