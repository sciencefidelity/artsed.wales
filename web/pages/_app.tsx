import { AppProps } from "next/app"
import Script from "next/script"
import { useRouter } from "next/router"
import "modern-normalize"
import "styles/global.scss"

const App = ({ Component, pageProps }: AppProps) => {
	const { locale } = useRouter()
	return (
		<>
			<Script
				src="https://plausible.io/js/plausible.js"
				data-domain={locale === "cy" ? "celfadd.cymru" : "artsed.wales"}
			/>
			<Component {...pageProps} />
		</>
	)
}
export default App
