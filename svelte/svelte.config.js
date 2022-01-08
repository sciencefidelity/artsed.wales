import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import image from "svelte-image"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    ...image()
  }),

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      optimizeDeps: {
        include: ["blurhash"],
      },
      // ssr: {
      //   noExternal: ["svelte-image"],
      // }
    }
  }
}

export default config
