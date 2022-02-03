import { AppProps } from "next/app"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "styles/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
