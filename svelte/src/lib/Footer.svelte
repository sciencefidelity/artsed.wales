<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import plwg from "../icons/plwg-logo.svg"
  import artsActive from "../icons/arts-active-logo.svg"
</script>

<footer class="bg-dark sans">
  <div class="footer__container container relative flex fg-light">
    <div class="footer__left flex column w-50">
      <h2 class="footer__contact fg-light">
        {$t('content.contact')}
      </h2>
      <a href="mailto:{$t('content.email')}">
        <p class="footer__email fg-light underline">{$t('content.email')}</p>
      </a>
      <p class="footer__copy absolute">
        © {new Date().getFullYear()} {$t('content.title')}
      </p>
    </div>

    <div class="flex column w-50">
      <div class="flex">
        <a
          href="https://plwg.cymru/"
          target="_blank"
          rel="noreferrer"
          class="plwg-link"
        >
          <img
            alt="Link to plwg.cymru"
            src={plwg}
            width="285"
            height="118.97"
            loading="lazy"
            class="plwg-logo"
          />
        </a>
        <a
          href="https://artsactive.org.uk/"
          target="_blank"
          rel="noreferrer"
          class="aa-link"
        >
          <img
            alt="Link to Arts Active"
            src={artsActive}
            width="100"
            height="128.33"
            loading="lazy"
            class="aa-logo"
          />
        </a>
      </div>
      <div class="made-by flex">
        <p>
          {$t('content.site')}{" "}
          <a
            href="https://mattcook.dev/"
            target="_blank"
            rel="noreferrer"
            class="fg-light"
          >
            Matt Cook
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>

<!-- prettier-ignore -->
<style lang="scss">
  @use "../styles/foundation/breakpoints" as b;

  .footer__container {
    padding: 3.6rem 0 1.8rem;
  }

  .footer__contact {
    margin-bottom: -0.18rem;
  }

  .footer__email {
    font-size: 2.7rem;
    margin-bottom: 5.2rem;
  }

  .footer__copy {
    font-size: 1.8rem;
    bottom: 1em;
    left: 0;
  }

  .plwg-logo {
    width: 28.5rem;
    margin-left: 1.8rem;
  }
  .aa-logo {
    width: 100px;
  }

  .aa-link {
    margin-left: auto;
  }

  .made-by {
    font-size: 2rem;
    margin-left: auto;
    align-items: flex-end;
    margin-top: -1.3rem;
  }
</style>
