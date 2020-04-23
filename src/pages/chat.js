import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <h1>Neighborhood Chat</h1>
      <p>We use a popular chat app called <a href="https://slack.com/">Slack</a> to create our own private 
        neighbor-to-neighbor communication space. 
        It's a very nice app on your smartphone or computer, or you can use it from any web browser. You can configure 
        your settings to notify you of messages in real time (like texting), or check it on your own schedule 
        (like discussion/bulletin boards). There are multiple channels (a.k.a. chat rooms) to be "in" or "out" 
        of as you please.
      </p>
      <p>You might want to participate here to:</p>
      <ul>
        <li>Get to know your neighbors in the #introductions channel</li>
        <li>Contribute a newsletter item in the #news channel</li>
        <li>Volunteer to support your neighbors in the #organizing channel</li>
        <li>Ask for an egg, or to borrow a wheelbarrow, in #other-stuff</li>
      </ul>
      <p>And if the whole concept is not your cup of tea... just ignore the Slack invite! You can get 
        the <Link to="/newsletter/">email newsletter</Link> or call the <Link to="/hotline/">community phone hotline</Link> without 
        any chatting required.</p>
      <h3><Link to="/join/" className="pure-button pure-button-primary">Click here to join!</Link></h3>
      <p>(TODO: Add some Slack tips for configuring notifications, profiles, etc.) 
        You can also pop into #slack-help in the chat, or 
        email <a href="mailto:north.crown.hill@gmail.com">north.crown.hill@gmail.com</a> with any questions.
      </p>
      <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
)
