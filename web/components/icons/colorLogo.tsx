import { useRouter } from "next/router"
import s from "styles/layout.module.scss"

export function ColorLogo() {
  const { locale } = useRouter()
  return (
    <svg
      viewBox="0 0 1452 1452"
      xmlns="http://www.w3.org/2000/svg"
      className={s.logo}
    >
      <title>
        {locale === "cy"
          ? "Rhwydwaith Cenedlaethol Celfyddydau ac Addysg"
          : "National Arts and Education Network"}
      </title>
      <ellipse
        cx="725.7"
        cy="722.9"
        rx="725.7"
        ry="722.9"
        style={{ fill: "none" }}
      />
      <clipPath id="a">
        <ellipse cx="725.7" cy="722.9" rx="725.7" ry="722.9" />
      </clipPath>
      <g clipPath="url(#a)">
        <path
          d="M1234.5 1451.3c-113.3 73.3-364 .2-508.8.2-164 0-587 149.4-725.7-.2-149.4-161 0-489 0-725.5C0 533.1-122.8 130 0 0c132.3-140.1 518 .2 725.7.2 200 0 619-131.2 750.2-.2 131.7 131.4-24.6 525.3-24.6 725.8 0 184.8 113.9 536.4 0 664.6 0 0-.1.1 0 0l-354.8-357L1256.8 813 1107 702.6 963.2 898.3 676.3 609.6c-55.1-55-82.7-113.7-82.7-175.7 0-86.1 46.5-125.7 89.6-139.5 32.7-10.3 41.3-8.6 55.1-8.6 96.5 0 153.3 72.3 153.3 162v86h201.6v-86l-1.7-20.8c-5.2-51.6-32.8-175.7-132.7-261.8-63.7-63.7-230.8-93-348-51.7-112 31-165.3 118.9-191.2 186-15.5 43.1-25.8 100-25.8 115.5-1.7 8.6-1.7 13.8-1.7 19a350 350 0 0 0 20.6 117c13.8 39.7 25.9 65.5 34.5 77.6a472.8 472.8 0 0 0 20.7 31c-124 105-186.1 218.7-186.1 341 0 98.2 32.7 177.5 96.5 241.2 63.7 63.7 156.7 94.7 282.5 94.7 149.9 0 260.1-70.6 320.4-137.8l253.3 252.6Zm-568.5-306c-108.6 0-182.6-56.8-182.6-146.4 0-55.1 36.1-130.9 113.7-180.8l248 246.3c-43 53.4-103.3 81-179.1 81ZM725.7.8Z"
          style={{ fill: "url(#b)" }}
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(2053.18) rotate(-45 .9 .4)"
        >
          <stop offset="0" style={{ stopColor: "#f315ff", stopOpacity: 1 }} />
          <stop offset="0.8" style={{ stopColor: "#ffb300", stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: "#ffeb03", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  )
}
