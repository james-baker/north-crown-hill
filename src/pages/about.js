import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import tableau from "tableau-api"
import Layout from "../components/layout"

//export default ({ data }) => {
class AboutPage extends Component {

  componentDidMount() {  
    const vizUrl = "https://public.tableau.com/views/OutreachStatus/OutreachStatus?:display_count=y&:toolbar=n";
    const vizOptions = {
        hideTabs: true,
        hideToolbar: true,
        width: "400px",
        height: "510px"};
    const vizContainer = this.vizContainer;  
    new window.tableau.Viz(vizContainer, vizUrl, vizOptions);
  }

  render() {
    const data = this.props.data
    return <Layout>
    <div className="content">
    <h1>About this project</h1>
    <p>This is a self-organized, unincorporated, 100% volunteer effort to strengthen the social fabric 
            of our mini-neighborhood. We need volunteers!</p>
        <p>Goal #1: Make one warm contact with every household in the area.</p>

    <div ref={(div) => { this.vizContainer = div }}></div>  
    <p>TODO list:
        <ul>
            <li>write subpages for newsletter, chat, directory, and improve main page</li>
        </ul>
    </p>
    <h1>About the organizer</h1>
    <div className="pure-g">
        <div className="l-box pure-u-1 pure-u-md-2-3 pure-u-lg-2-3">
            <p>
                Hi friends, my name is James. My family and I have lived in this neighborhood for six years, and... 
                have met very few of you, as I think is typical of modern city life. We all find our community connections 
                mostly in our work, our schools, our churches, and other interest-based circles. We have less in common 
                with those who literally surround us physically... but we share our city streets and our humanity, and 
                in a time like this we may be the only community that <i>can</i> be there to help each other out. I'm 
                "very online" (as the kids say) myself, and am eager to see how this blended meatspace+cyberspace experiment goes.
            </p>
        </div>
        <div className="l-box pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
            <Img fixed={data.selfie.childImageSharp.fixed} alt="Selfie of James" />
        </div>
    </div>
    <h3>Why should you trust me with your data?</h3>
    <p>
        Hopefully this <Link to="/privacy">privacy policy</Link> demonstrates the care I put into protecting any data you share. 
        I've worked for a <a href="https://www.tableau.com">data visualization company</a> for the last dozen years -
        I believe strongly in the power of data to help, and also in the dangers of poorly managed data.  I've
        also had prior experience managing the personally-identifiable data of hundreds of coworkers while 
        preserving their anonymity. You choose how much data you want to share with which audiences.
    </p>
    <h3>Why should you invest your energy in this project?</h3>
    <p>
        Ultimately, this network will last as long as participants want and need it to.  I'll set it up so that 
        it doesn't rely on me long-term, should we find that it's a valuable community resource even when we're 
        not in crisis mode.  In the short-term... I am a capable project manager, verteran software engineer,  
        and the experienced founder and organizer of another <a href="https://twitter.com/tabempethicsall">all-volunteer organization</a>.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </div>
    <div className="footer l-box is-center">
      Established 2020-03-14, NCH is a neighborhood community support network in
      Seattle, WA, USA.
    </div>
  </Layout>
  }
}

export default AboutPage;

export const query = graphql`
  query {
    projectChangelog: file(relativePath: { eq: "md/project-changelog.md" }) {
      childMarkdownRemark {
        html
      }
    }
    selfie: file(relativePath: { eq: "images/jbaker.jpg" }) {
      childImageSharp {
        fixed(width: 163, height: 189) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
