import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import Ribbon from "../components/ribbon"

export default ({ data }) => <Layout>
  <div>
  Hello world!
  <Ribbon>testing a ribbon.</Ribbon>
  <p><Link to="/about">About</Link></p>
  <Img fixed={data.logo.childImageSharp.fixed} alt="NCH logo"/>
  </div>
</Layout>

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "images/nchlogo.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    map: file(relativePath: { eq: "images/map.jpg" }) {
      childImageSharp {
        fixed(width: 363, height: 363) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`