import { FC } from "react"
import s from "styles/events.module.scss"
// import b from "styles/event.module.scss"

interface Props {
  name: string
}

export const Shape: FC<Props> = ({ name }) => {
  return (
    <div className={`${s[name]}`}>
      {name === "dashedCircle" && (
        <svg><circle cx="50%" cy="50%" r="200px"></circle></svg>
      )}
      {name === "circle" && (
        <svg><circle cx="50%" cy="50%" r="200px"></circle></svg>
      )}
      {name === "stripedCircle" && (
        <svg width="100%" height="100%" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" style={{fill:"none"}}/><clipPath id="_clip1"><circle cx="256" cy="256" r="256"/></clipPath><g clipPath="url(#_clip1)"><g><rect x="-0" y="297.289" width="512" height="21"/><rect x="-0" y="241.691" width="512" height="21"/><rect x="-0" y="186.092" width="512" height="21"/><rect x="-0" y="130.494" width="512" height="21"/><rect x="-0" y="74.895" width="512" height="21"/><rect x="-0" y="19.297" width="512" height="21"/><rect x="-0" y="464.084" width="512" height="21"/><rect x="-0" y="352.887" width="512" height="21"/><rect x="-0" y="408.486" width="512" height="21"/></g></g></svg>
      )}
      {name === "triangle" && (
        <svg viewBox="0 0 200 200"><polygon points="50 15, 100 100, 0 100" /></svg>
      )}
    </div>
  )
}
