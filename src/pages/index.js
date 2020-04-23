import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faQuestion, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import Ribbon from "../components/ribbon"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div className="splash-container">
      <div className="splash">
        <Img fixed={data.logo.childImageSharp.fixed} alt="NCH logo" />
        <h1>
          A safety net of human connection
          <br />
          in the time of Covid-19
        </h1>
        <p className="splash-subhead">
          We're all in this together. Let's build connections with our
          neighbors, and support each other as we deal with the effects of the
          Covid-19 epidemic. You might need some TP - or someone to feed your
          pets if you're hospitalized. Or maybe you're comfortably working from
          home and feel called to help those around you who have been
          economically impacted by the distancing, quarantines, and shutdowns.
          Let's pull together as a community.
        </p>
        <p className="splash-subhead">
          <h3><Link to="/join">Click here to join!</Link></h3>
        </p>
      </div>
    </div>
    <div className="content-wrapper">
      <div className="content">
        <h2 className="content-head is-center">What is it?</h2>
        <div className="pure-g">
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 className="content-subhead">
              <FontAwesomeIcon icon={faEnvelope} />&nbsp;Email Newsletter
            </h3>
            <p>Periodic neighborhood updates with hyper-local Covid19 and NCH news</p>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 className="content-subhead">
              <FontAwesomeIcon icon={faMobileAlt} />&nbsp;Chat App
            </h3>
            <p>A <a href="https://slack.com/">Slack</a> chat app serves as the neighbor-to-neighbor
              communication hub for getting to know each other, and organizing/volunteering activity
            </p>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 className="content-subhead">
              <FontAwesomeIcon icon={faPhone} />&nbsp;Community Hotline
            </h3>
            <p>Dial the <Link to="/hotline">hotline</Link> if your neighbors could help you with anything! 
              Volunteers will respond to your voicemail message.
            </p>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 className="content-subhead">
              <FontAwesomeIcon icon={faQuestion} />&nbsp;...what else?
            </h3>
            <p>If you have an idea, <a href="mailto:north.crown.hill@gmail.com">share it!</a></p>
          </div>
        </div>
        <p>
          All data collection and handling is described by our{" "}
          <Link to="/privacy">privacy policy</Link>.
        </p>

        <Ribbon>
          <div className="l-box-lrg  is-center">
            <h2 className="content-head content-head-ribbon">Want to get connected?</h2>
            <h3><Link to="/join" className="pure-button pure-button-primary">Click here to join!</Link></h3>
          </div>
        </Ribbon>

        <h2 className="content-head is-center">Where is it?</h2>
        <div className="pure-g">
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
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
              west and north, Piper's Creek on the east. If we really get
              humming, we <i>might</i> decide to extend southward by one block
              later.
            </p>
          </div>
          <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
            <a href="https://drive.google.com/open?id=1nwalXQd8cegTBFgPXCqw5PfTMPgiMSn8">
              <Img fixed={data.map.childImageSharp.fixed} alt="Map of NCH boundary" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "images/nchlogo.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    # map comes from https://www.google.com/maps/d/edit?mid=1nwalXQd8cegTBFgPXCqw5PfTMPgiMSn8&ll=47.7032539501008%2C-122.37206642244661&z=16
    map: file(relativePath: { eq: "images/map.jpg" }) {
      childImageSharp {
        fixed(width: 363, height: 363) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
