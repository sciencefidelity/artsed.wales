import React, { FC, FormEventHandler, MouseEventHandler } from "react"

interface Props {
  animateButtonValue: string
  changeLightness: FormEventHandler<HTMLInputElement> | undefined
  changeHueMax: FormEventHandler<HTMLInputElement> | undefined
  changeHueMin: FormEventHandler<HTMLInputElement> | undefined
  changeSaturation: FormEventHandler<HTMLInputElement> | undefined
  toggleAnimation: MouseEventHandler<HTMLInputElement> | undefined
}

export const Controls: FC<Props> = ({
  animateButtonValue,
  changeLightness,
  changeHueMax,
  changeHueMin,
  changeSaturation,
  toggleAnimation
}) => (
  <div>
    <input
      id="range"
      name="hueMax"
      type="range"
      min="0"
      max="360"
      defaultValue="360"
      onInput={changeHueMax}
    />
    <input
      id="range"
      name="hueMin"
      type="range"
      min="0"
      max="360"
      defaultValue="0"
      onInput={changeHueMin}
    />
    <input
      id="range"
      type="range"
      min="0"
      max="100"
      defaultValue="50"
      onInput={changeSaturation}
    />
    <input
      id="range"
      type="range"
      min="0"
      max="100"
      defaultValue="50"
      onInput={changeLightness}
    />
    <input id="animate"
      type="button"
      value={animateButtonValue}
      onClick={toggleAnimation}
    />
  </div>
)
