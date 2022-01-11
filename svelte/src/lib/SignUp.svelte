<script lang="ts">
  import { t } from "$lib/translations/index.js"
  import chevron from "../icons/chevron-right-solid.svg"
</script>

<section class="mb-large text-center">
  <h2>{$t('content.signup-1')}</h2>
  <div>
    <form>
      <label>
        <input
          type="text"
          name={$t('content.signup-2')}
          placeholder={$t('content.signup-2')}
          class="signup__input sans bg-white"
        />
      </label>
      <input
        type="image"
        src={chevron}
        alt=""
        class="signup__send"
      />
    </form>
  </div>
  <div class="signup__text center text-left">
    <p>{$t('content.signup-3')}</p>
  </div>
</section>

<style lang="scss">
  .signup__input {
    border: 0;
    width: 57%;
    padding: 1.5rem 2.7rem;
    font-size: 2.8rem;
    // @include b.mq(md) {
    //   border: 0;
    //   width: calc(88% - 7.2rem);
    // }
    // @include b.mq(sm) {
    //   border: 0;
    //   width: calc(100% - 7.2rem);
    //   padding: 1.5rem 2.7rem;
    //   font-size: 2.7rem;
    // }
  }

  .signup__text {
    width: 50%;
    // @include b.mq(md) {
    //   width: 65%;
    // }
    // @include b.mq(sm) {
    //   text-align: left;
    //   width: 88%;
    //   padding-top: 0.4rem;
    //   margin: auto;
    // }
  }

  .signup__send {
    cursor: pointer;
    background-color: rgba(77, 73, 73);
    border: 0;
    height: 7rem;
    width: 7rem;
    padding: 2.1rem;
    transform: translate(-0.4rem, 2.4rem);
  }
</style>
