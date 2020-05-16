import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default class AboutPage extends Component {

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
    <h1>Who's in North Crown Hill?</h1>

    <a href="https://drive.google.com/open?id=1nwalXQd8cegTBFgPXCqw5PfTMPgiMSn8">
              <Img fixed={data.map.childImageSharp.fixed} alt="Map of NCH boundary" />
            </a>
    <p>
      North Crown Hill is currently defined as the addresses on or
      inside the area bounded by these streets:
    </p>
    <ul>
      <li>West: Mary Ave NW (includes both sides)</li>
      <li>North: NW 105th St (street boundary)</li>
      <li>
        East: 8th Ave NW, Alderbrook Pl NW (includes both sides)
      </li>
      <li>South: NW 100th Ave (street boundary)</li>
    </ul>
    <p>
      This encompassess about 350 households in total. Blue Ridge to the
      west and north, Piper's Creek on the east.
    </p>

    <p>Have you <Link to="/join/">joined</Link> as a member already? Hover over your house below to check our data:</p>

    <div class='tableauPlaceholder' id='viz1586295286655' style={{position: 'relative'}}>
      <noscript><a href='https:&#47;&#47;www.northcrownhill.com'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ou&#47;OutreachStatus&#47;OutreachStatus&#47;1_rss.png' style={{border: 'none'}} /></a></noscript>
      <object class='tableauViz' style={{display:'none'}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='OutreachStatus&#47;OutreachStatus' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ou&#47;OutreachStatus&#47;OutreachStatus&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='publish=yes' /></object>
    </div>
    <br />
    If you live in North Crown Hill, come find out <Link to="/what/">what it is</Link>!
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
  }
}

export const query = graphql`
  query {
    map: file(relativePath: { eq: "images/map.jpg" }) {
      childImageSharp {
        fixed(width: 363, height: 363) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
