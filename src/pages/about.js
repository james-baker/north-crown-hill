import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

export default ({ data }) => <Layout>
  <p>About page.</p>
  <div dangerouslySetInnerHTML={{__html: data.projectChangelog.childMarkdownRemark.html}}></div>
</Layout>

export const query = graphql`
  query AboutPageQuery {
    projectChangelog: file(relativePath: {eq: "md/project-changelog.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`