import React from "react"
import { Link } from "gatsby"
import "./header.css"

const ListLink = props => (
  <li className="pure-menu-item">
    <Link to={props.to} className="pure-menu-link">{props.children}</Link>
  </li>
)
export default ({ children }) => (
  <div>
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <span className="pure-menu-heading" style={{textTransform: 'none'}}>North Crown Hill</span>
        <ul className="pure-menu-list">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </div>
    </div>
    <div className="fixed-nav-space"></div>
  </div>
)