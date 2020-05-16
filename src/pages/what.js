import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faQuestion, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <h1>What's happening?</h1>
      <p>The North Crown Hill network currently consists of three activities:</p>
        <div>
          <h3 className="content-subhead"><FontAwesomeIcon icon={faEnvelope} />&nbsp;Email Newsletter</h3>
          <p>Receive a periodic <Link to="/newsletter/">neighborhood newsletter</Link> with 
          hyper-local Covid19 updates and NCH news</p>
        </div>
        <div>
          <h3 className="content-subhead"><FontAwesomeIcon icon={faMobileAlt} />&nbsp;Chat App</h3>
          <p>Use our <Link to="/chat/">private Slack chat</Link> serves as the neighbor-to-neighbor
            communication hub for getting to know each other and organizing NCH activity.
          </p>
        </div>
        <div>
          <h3 className="content-subhead"><FontAwesomeIcon icon={faPhone} />&nbsp;Community Hotline</h3>
          <p>Dial the <Link to="/hotline/">hotline</Link> if your neighbors could help you with anything! 
            Volunteers will respond to your voicemail message.
          </p>
        </div>
        <h3 className="content-subhead">Sound like something you'd be interested in?</h3>
        <h3><Link to="/join/" className="pure-button pure-button-primary">Click here to join!</Link></h3>
        <div>
          <h3 className="content-subhead"><FontAwesomeIcon icon={faQuestion} />&nbsp;...any other ideas?</h3>
          <p>If you have an idea, <a href="mailto:north.crown.hill@gmail.com">share it</a>! We'll figure 
            out what's most useful as we experiment.</p>
        </div>
        <p>If you're curious about the organizing behind-the-scenes, <Link to="/about/">click here</Link>.</p>

      <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
)
