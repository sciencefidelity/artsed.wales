<script context="module">
  import { browser, dev } from "$app/env"

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true
</script>

<svelte:head>
  <title>Counter</title>
</svelte:head>

<div class="about">
  <h1>About</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed
    augue lacus. Sit amet est placerat in egestas erat imperdiet sed. Et
    pharetra pharetra massa massa ultricies mi. Nibh sed pulvinar proin gravida.
    Ornare massa eget egestas purus viverra accumsan in. Euismod nisi porta
    lorem mollis aliquam ut porttitor leo. Augue lacus viverra vitae congue eu
    consequat. Habitant morbi tristique senectus et netus et. Euismod in
    pellentesque massa placerat duis ultricies lacus sed. Auctor neque vitae
    tempus quam. Elementum facilisis leo vel fringilla est ullamcorper eget.
  </p>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  .about {
    margin: 5rem 2rem;
  }
</style>
