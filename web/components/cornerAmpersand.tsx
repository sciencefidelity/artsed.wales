import s from "components/scrollup.module.scss"

const CornerAmpersand = props => (
  <svg
    viewBox="0 0 1720 1995"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    width="10rem"
    height="10rem"
    className={s.corner}
    {...props}
  >
    <path d="m1405 1994-378-372a632 632 0 0 1-470 203c-185 0-322-46-415-140A478 478 0 0 1 0 1331c0-179 91-346 273-501l-30-45c-13-18-30-56-51-114-20-58-30-114-30-172 0-8 0-15 3-28 0-23 15-106 37-170 38-98 117-227 281-273 172-61 418-18 512 76a610 610 0 0 1 194 385l3 30v126H896V519c0-132-84-238-225-238-21 0-33-2-81 13-64 20-132 78-132 205 0 91 41 177 122 258l420 427 212-291 220 162-232 322 519 521v96h-314Zm-841-450c-159 0-268-84-268-215 0-81 53-193 167-266l365 362a321 321 0 0 1-264 119Z" />
  </svg>
)
export default CornerAmpersand
