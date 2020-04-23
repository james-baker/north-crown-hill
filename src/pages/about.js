import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Footer from "../components/footer"

class AboutPage extends Component {

  componentDidMount() {  
    let divElement = document.getElementById('viz1586295286655');
    let vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width='400px';vizElement.style.height='510px';
    let scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  render() {
    const data = this.props.data
    return <Layout>
    <div className="content">
    <h1>About this project</h1>
    <p>This is a self-organized, unincorporated, 100% volunteer effort to strengthen the social fabric 
            of our mini-neighborhood. Neighbor, this is for and by <i>you</i> however you can contribute!</p>

    <p>Goal #1: Make one warm contact with every household in the area.</p>

    <div class='tableauPlaceholder' id='viz1586295286655' style={{position: 'relative'}}>
      <noscript><a href='https:&#47;&#47;www.northcrownhill.com'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ou&#47;OutreachStatus&#47;OutreachStatus&#47;1_rss.png' style={{border: 'none'}} /></a></noscript>
      <object class='tableauViz' style={{display:'none'}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='OutreachStatus&#47;OutreachStatus' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ou&#47;OutreachStatus&#47;OutreachStatus&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='publish=yes' /></object>
    </div>
    <div dangerouslySetInnerHTML={{__html: data.projectChangelog.childMarkdownRemark.html}}></div>

    <div dangerouslySetInnerHTML={{__html: data.technical.childMarkdownRemark.html}}></div>
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
        Hopefully this <Link to="/privacy/">privacy policy</Link> demonstrates the care I put into protecting any data you share. 
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
    <Footer />
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
    technical: file(relativePath: { eq: "md/about-technical.md" }) {
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
