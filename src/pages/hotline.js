import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <div dangerouslySetInnerHTML={{__html: data.md.childMarkdownRemark.html}}></div>
      <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
)

export const query = graphql`
  query {
    md: file(relativePath: { eq: "md/hotline.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`