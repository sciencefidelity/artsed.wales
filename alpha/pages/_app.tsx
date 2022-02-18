import { AppProps } from "next/app"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "styles/global.scss"

const App = ({ Component, pageProps }: AppProps) =>
  <Component {...pageProps} />
export default App
