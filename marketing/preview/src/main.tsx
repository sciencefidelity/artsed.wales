import React from "react"
import ReactDOM from "react-dom"
import Index from "pages/Index"
import "styles/globals.css"

ReactDOM.render(
  <React.StrictMode>
    <Index path="/" />
  </React.StrictMode>,
  document.getElementById("root")
)
