import { AppProps } from "next/app"
import Script from "next/script"
import "modern-normalize"
import "styles/global.scss"

const App = ({ Component, pageProps }: AppProps) =>
  <>
    <Script
      src="https://plausible.io/js/plausible.js"
      data-domain="artsed.wales"
    />
    <Component {...pageProps} />
  </>
export default App
