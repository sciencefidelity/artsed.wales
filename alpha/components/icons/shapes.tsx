export const DashedCircle = () => (
  <div>
    <svg
      style={{
        zIndex: 1,
        position: "absolute",
        width: 420,
        height: 420,
        top: "-30%",
        left: "-30%"
      }}
    >
      <circle cx="50%" cy="50%" r="200px"
        style={{
          strokeWidth: 15,
          strokeDasharray: "6%",
          fill: "transparent",
          stroke: "black"
        }}
      ></circle>
    </svg>
  </div>
)

export const Triange = () => (
  <div style={{
    zIndex: 1,
    position: "absolute",
    width: "170%",
    height: "170%",
    strokeWidth: 3.5,
    fill: "transparent",
    stroke: "black",
    left: -34,
    top: 135,
    transform: "rotate(25deg)"
  }}>
    <svg viewBox="0 0 200 200">
      <polygon points="50 15, 100 100, 0 100" />
    </svg>
   </div>
)

export const Circle = () => (
  <div>
    <svg
      style={{
        position: "absolute",
        width: 420,
        height: 420,
        top: "-30%",
        left: "30%"
      }}
    >
      <circle cx="50%" cy="50%" r="200px"
        style={{
          strokeWidth: 15,
          strokeDasharray: "6%",
          fill: "transparent",
          stroke: "black"
        }}
      ></circle>
    </svg>
  </div>
)

export const StripedCircle = () => (
  <svg width="100%" height="100%" viewBox="0 0 512 512" style={{
    zIndex: 1,
    position: "absolute",
    width: "70%",
    top: -10,
    right: 130,
    transform: "rotate(-55deg)"
  }}>
    <circle cx="256" cy="256" r="256" style={{fill:"none"}}/><clipPath id="_clip1"><circle cx="256" cy="256" r="256"/></clipPath><g clip-path="url(#_clip1)"><g><rect x="-0" y="297.289" width="512" height="21"/><rect x="-0" y="241.691" width="512" height="21"/><rect x="-0" y="186.092" width="512" height="21"/><rect x="-0" y="130.494" width="512" height="21"/><rect x="-0" y="74.895" width="512" height="21"/><rect x="-0" y="19.297" width="512" height="21"/><rect x="-0" y="464.084" width="512" height="21"/><rect x="-0" y="352.887" width="512" height="21"/><rect x="-0" y="408.486" width="512" height="21"/></g></g>
  </svg>
)
