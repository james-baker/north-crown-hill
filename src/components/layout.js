import React from "react"
import "../styles/pure-min.css"
import "../styles/grids-responsive-min.css"
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import Header from "./header"
import "./layout.css"
export default ({ children }) => (
  <div>
    <Header></Header>
    {children}
  </div>
)
