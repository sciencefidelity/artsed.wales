import { AppProps } from "next/app"
import Script from "next/script"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "styles/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://plausible.io/js/plausible.js"
        data-domain="artsed.wales"
      />
      <Component {...pageProps} />
    </>
  )
}
