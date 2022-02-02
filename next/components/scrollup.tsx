import { useRouter } from "next/router"
import Link from "components/link"
// TODO: screen reader text hard coded
const Scrollup = () => {
  const { locale } = useRouter()
  return (
    <Link href="#">
      <div className="scrollupContainer">
        <span className="screenReaderText">
          {locale === "cy" ? "Yn ôl i'r brig" : "Back to top"}
        </span>
        <img
          alt=""
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='scroll-up' viewBox='0 0 104 54'%3E%3Cpath d='M51.7 5l-48.1 48.1c-0.8 0.8-2.1 0.8-2.9 0 -0.8-0.8-0.8-2.1 0-2.9l49.6-49.6c0.8-0.8 2.1-0.8 2.9 0l49.6 49.6c0.8 0.8 0.8 2.1 0 2.9 -0.8 0.8-2.1 0.8-2.9 0l-48.1-48.1Z' fill='%23999999'/%3E%3C/svg%3E"
          loading="lazy"
          className="scrollup"
        />
      </div>
    </Link>
  )
}

export default Scrollup
