import { FC } from "react"

interface Props {
  name: string
}

export const Shape: FC<Props> = ({ name }) => {
  return (
    <>
      {name === "secretCircle" && (
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <circle cx="50%" cy="50%" r="21.25%"></circle>
        </svg>
      )}
      {name === "digitalCircle" && (
        <svg width="100%" height="100%" viewBox="0 0 512 512">
          <circle cx="256" cy="256" r="256" style={{fill:"none"}}/>
          <clipPath id="_clip1"><circle cx="256" cy="256" r="256"/></clipPath>
          <g clipPath="url(#_clip1)">
            <g>
              <rect y="19.297" width="512" height="25"/>
              <rect y="74.895" width="512" height="25"/>
              <rect y="130.494" width="512" height="25"/>
              <rect y="186.092" width="512" height="25"/>
              <rect y="241.691" width="512" height="25"/>
              <rect y="297.289" width="512" height="25"/>
              <rect y="352.887" width="512" height="25"/>
              <rect y="408.486" width="512" height="25"/>
              <rect y="464.084" width="512" height="25"/>
            </g>
          </g>
        </svg>
      )}
      {name === "digitalCircle1" && (
        <svg width="100%" height="100%" viewBox="0 0 512 512">
          <circle cx="256" cy="256" r="256" style={{fill:"none"}}/>
          <clipPath id="_clip2"><circle cx="256" cy="256" r="256"/></clipPath>
          <g clipPath="url(#_clip2)">
            <g>
              <rect y="10" width="512" height="20"/>
              <rect y="50" width="512" height="20"/>
              <rect y="90" width="512" height="20"/>
              <rect y="130" width="512" height="20"/>
              <rect y="170" width="512" height="20"/>
              <rect y="210" width="512" height="20"/>
              <rect y="250" width="512" height="20"/>
              <rect y="290" width="512" height="20"/>
              <rect y="330" width="512" height="20"/>
              <rect y="370" width="512" height="20"/>
              <rect y="410" width="512" height="20"/>
              <rect y="450" width="512" height="20"/>
              <rect y="490" width="512" height="20"/>
            </g>
          </g>
        </svg>
      )}
      {name === "digitalTriangle" && (
        <svg width="100%" height="100%" viewBox="0 0 200 174">
          <path d="M100.006,0.018l100.005,173.613l-200.011,-0l100.006,-173.613Z" style={{fill: "none"}} />
          <clipPath id="_clip3">
            <path d="M100.006,0.018l100.005,173.613l-200.011,-0l100.006,-173.613Z"/>
          </clipPath>
          <g clipPath="url(#_clip3)">
            <g>
              <rect x="-54.701" y="44.815" width="259.081" height="5.771"/>
              <rect x="-54.701" y="33.603" width="259.081" height="5.771"/>
              <rect x="-54.701" y="22.39" width="259.081" height="5.771"/>
              <rect x="-54.701" y="11.178" width="259.081" height="5.771"/>
              <rect x="-54.701" y="-0.034" width="259.081" height="5.771"/>
              <rect x="-54.701" y="78.452" width="259.081" height="5.771"/>
              <rect x="-54.701" y="56.027" width="259.081" height="5.771"/>
              <rect x="-54.701" y="67.24" width="259.081" height="5.771"/>
              <rect x="-54.632" y="134.222" width="259.081" height="5.771"/>
              <rect x="-54.632" y="123.01" width="259.081" height="5.771"/>
              <rect x="-54.632" y="111.797" width="259.081" height="5.771"/>
              <rect x="-54.632" y="100.585" width="259.081" height="5.771"/>
              <rect x="-54.632" y="89.373" width="259.081" height="5.771"/>
              <rect x="-54.632" y="167.859" width="259.081" height="5.771"/>
              <rect x="-54.632" y="145.434" width="259.081" height="5.771"/>
              <rect x="-54.632" y="156.647" width="259.081" height="5.771"/>
            </g>
          </g>
        </svg>
      )}
      {name === "siteTriangle" && (
        <svg width="100%" height="100%" viewBox="0 0 220 220">
          <polygon points="100 30, 200 200, 0 200" />
        </svg>
      )}
      {name === "siteCircle" && (
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <circle cx="50%" cy="50%" r="21.25%"></circle>
        </svg>
      )}
      {name === "siteSquare" && (
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <rect width="80%" height="80%" x="10%" y="10%" />
        </svg>
      )}
      {name === "danceCircle" && (
        <svg width="100%" height="100%" viewBox="0 0 500 500">
          <circle cx="50%" cy="50%" r="30%"></circle>
        </svg>
      )}
      {name === "danceTriangle" && (
        <svg width="100%" height="100%" viewBox="0 0 440 440">
          <polygon points="200 60, 400 400, 0 400" />
        </svg>
      )}
      {name === "danceSquare" && (
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <rect width="75%" height="75%" x="5%" y="5%" />
        </svg>
      )}
    </>
  )
}
