import adapter from "@sveltejs/adapter-auto"
import * as path from "path"
import preprocess from "svelte-preprocess"
import { imagetools } from "vite-imagetools"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      // https://github.com/sveltejs/kit/issues/1632#issuecomment-854056053
      build: {
        rollupOptions: {
          output: {
            manualChunks: undefined
          }
        }
      },
      plugins: [imagetools()],
      resolve: {
        alias: {
          $img: path.resolve("src/images")
        }
      },
      server: {
        fs: {
          strict: false
        }
      }
    }
  }
}

export default config
