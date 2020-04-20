import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "../styles/pure-min.css"
import "../styles/grids-responsive-min.css"
import Header from "./header"
import "./layout.css"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return <>
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description}/>
  </Helmet>
  <Header></Header>
  {children}
  </>
}