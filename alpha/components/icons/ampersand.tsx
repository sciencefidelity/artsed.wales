import { useRouter } from "next/router"
import u from "styles/utils.module.scss"
import s from "styles/about.module.scss"

export function Ampersand() {
  const { locale } = useRouter()
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      className={`${s.ampersand} ${u.absolute}`}
    >
      <title>
        {locale === "cy"
          ? "Rhwydwaith Cenedlaethol Celfyddydau ac Addysg"
          : "National Arts and Education Network"}
      </title>
      <path d="m409.1 512-66.6-65.8A173.9 173.9 0 0 1 213 501.8c-50.8 0-88.4-12.5-114.1-38.3a131.6 131.6 0 0 1-39-97.4c0-49.4 25-95.3 75.2-137.8a141.6 141.6 0 0 1-22.3-43.8c-5.6-16-8.3-31.3-8.3-47.3 0-2.1 0-4.2.7-7.7 0-6.2 4.1-29.2 10.4-46.6 10.4-27.1 32-62.6 77.3-75.2C240.2-9 307.7 3 333.4 28.7c40.4 34.7 51.6 84.8 53.6 105.7l.7 8.3v34.8h-81.4v-34.8c0-36.1-23-65.4-62-65.4-5.5 0-9-.7-22.2 3.5-17.4 5.6-36.2 21.6-36.2 56.4 0 25 11.1 48.7 33.4 71l115.5 117.6 58.5-80 60.6 44.5-64 88.4 76 76.3-56.8 57Zm-194-87.4c-43.8 0-73.7-23-73.7-59.2 0-22.2 14.6-52.9 45.9-73l100.2 99.5c-17.4 21.5-41.7 32.7-72.4 32.7Z" />
    </svg>
  )
}
