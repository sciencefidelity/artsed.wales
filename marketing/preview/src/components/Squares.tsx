import React, { FC } from "react"

interface Props {
  lightness: number
  hueMax: number
  hueMin: number
  saturation: number
  squares: number
}

export const Squares: FC<Props> = ({
  lightness,
  hueMax,
  hueMin,
  saturation,
  squares
}) => {
  const arr = Array.from(Array(squares).keys())
  const h = (e: number) => ((hueMax / squares) * e) - hueMin
  const s = `${saturation}%`
  const l = `${lightness}%`
  return (
    <div className="canvas">
      {arr.map((e: number) =>
        <div
          key={e}
          className={`color-${e.toString()}`}
          style={{
            width: `${10 * (e + 1)}%`,
            backgroundColor: `hsl(${h(e)}, ${s}, ${l})`
          }}
        ></div>
      )}
    </div>
  )
}
