<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import chevron from "../icons/chevron-right-solid.svg"
</script>

<section class="mb-large text-center">
  <h2>{$t("content.signup-1")}</h2>
  <div>
    <form>
      <label>
        <input
          type="text"
          name={$t("content.signup-2")}
          placeholder={$t("content.signup-2")}
          class="signup__input sans bg-white"
        />
      </label>
      <input
        type="image"
        src={chevron}
        alt="Send your email address"
        class="signup__send"
      />
    </form>
  </div>
  <div class="signup__text center text-left">
    <p>{$t("content.signup-3")}</p>
  </div>
</section>

<style lang="scss">
  @use '../styles/foundation/breakpoints' as b;

  .signup__input {
    border: 0;
    width: 57%;
    padding: 1.5rem 2.7rem;
    font-size: 2.8rem;
    @include b.mq(lg) {
      width: 56%;
      font-size: 2.4rem;
    }
    @include b.mq(md) {
      width: calc(88% - 6.1rem);
      font-size: 2.2rem;
    }
    @include b.mq(sm) {
      width: calc(100% - 6rem);
      font-size: 1.8rem;
    }
  }

  .signup__text {
    width: 50%;
    @include b.mq(md) {
      width: 70%;
    }
    @include b.mq(sm) {
      text-align: left;
      width: 88%;
      margin: auto;
    }
  }

  .signup__send {
    cursor: pointer;
    background-color: rgba(77, 73, 73);
    border: 0;
    height: 7rem;
    width: 7rem;
    padding: 2.1rem;
    transform: translate(-0.4rem, 2.4rem);
    @include b.mq(lg) {
      height: 6.4rem;
      width: 6.4rem;
      padding: 1.8rem;
      transform: translate(-0.4rem, 2.25rem);
    }
    @include b.mq(md) {
      height: 6.1rem;
      width: 6.1rem;
      padding: 1.8rem;
      transform: translate(-0.4rem, 2.15rem);
    }
    @include b.mq(sm) {
      height: 5.55rem;
      width: 5.55rem;
      padding: 1.5rem;
      transform: translate(-0.4rem, 2.05rem);
    }
  }
</style>
