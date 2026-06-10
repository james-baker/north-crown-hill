import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <h1>Join</h1>
      <p>North Crown Hill is no longer accepting new members &mdash; the network's
        active phase wound down after 2020, and the newsletter, chat, and hotline
        are no longer staffed. This page remains as part of the site archive.</p>
      <p>Curious what it was? See <Link to="/what/">what we did</Link>, browse the
        past <Link to="/newsletter/">newsletters</Link>, or read the
        <Link to="/about/"> story behind the project</Link>. For anything else,
        you can still reach <a href="mailto:north.crown.hill@gmail.com">north.crown.hill@gmail.com</a>.</p>
      <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
)
