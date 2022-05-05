import { LinkTo } from "components/linkTo"

export const ErrorTemplate = () => (
  <div
    className="container"
    style={{
      height: "100vh",
      display: "grid",
      textAlign: "center"
    }}
  >
    <div style={{ margin: "auto" }}>
      <h1>404 not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <LinkTo href="/">
        <p>Home</p>
      </LinkTo>
    </div>
  </div>
)
