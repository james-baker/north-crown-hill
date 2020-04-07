import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "../styles/pure-min.css"
import "../styles/grids-responsive-min.css"
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import Header from "./header"
import "./layout.css"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <>
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="A neighborhood community support network."/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
  </Helmet>
  <Header></Header>
  {children}
  </>
}