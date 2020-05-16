import React from "react"
import { Link } from "gatsby"
import "./header.css"

const ListLink = props => (
  <li className="pure-menu-item">
    <Link to={props.to} className="pure-menu-link" activeStyle={{ color: "white" }}>{props.children}</Link>
  </li>
)
export default ({ children }) => (
  <div>
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <span className="pure-menu-heading" style={{textTransform: 'none'}}
          ><Link to="/" style={{textDecoration: "none", color: "white"}}>North Crown Hill</Link></span>
        <ul className="pure-menu-list">
          <ListLink to="/who/">Who</ListLink>
          <ListLink to="/what/">What</ListLink>
          <ListLink to="/join/">Join</ListLink>
        </ul>
      </div>
    </div>
    <div className="fixed-nav-space"></div>
  </div>
)