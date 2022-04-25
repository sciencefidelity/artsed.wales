import { AppProps } from "next/app"
import "modern-normalize"
import "styles/global.scss"

const App = ({ Component, pageProps }: AppProps) =>
  <Component {...pageProps} />
export default App
