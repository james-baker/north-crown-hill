import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <h1>Email Newsletter</h1>
      <p>The periodic <i>North Crown Hill News</i> is our easiest and most popular way to stay connected, with over 150 subscribers. 
      Currently sent about every two weeks, it focuses mostly on the intersection of Covid-19 with our neighborhood, zip code, and city.
      Your newsletter welcome message will also include our <Link to="/hotline/">community phone hotline</Link> number.</p>
      <p>(TODO: Put up some sample newsletter extracts here.)</p>
      <h3><Link to="/join/" className="pure-button pure-button-primary">Click here to join!</Link></h3>
      <p>Every newsletter contains an "unsubscribe" link, but it you'd like to switch email addresses, 
        add more household members, or anything else please send a request to <a href="mailto:north.crown.hill@gmail.com">north.crown.hill@gmail.com</a>.
      </p>
      <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
)
