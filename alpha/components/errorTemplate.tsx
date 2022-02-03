import Link from "components/link"

const Error = () => {
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "grid",
        textAlign: "center"
      }}
    >
      <div
        style={{
          margin: "auto"
        }}
      >
        <h1>404 not found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link href="/">
          <p>Home</p>
        </Link>
      </div>
    </div>
  )
}
export default Error
