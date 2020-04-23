import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <h1>Privacy Policy</h1>
      <p>
        This describes the data handling practices of North Crown Hill for
        data security and privacy. Last updated 2020-04-23.
      </p>
      <h4>Public Data</h4>
      <p>
        These data are publicly displayed on the website:
        <ul>
          <li>The geographic locations of households within the NCH area.</li>
          <li>The contact status of each household, relative to our outreach effort
            <ul>
              <li>
                Examples: Members, Non-members, Uncontacted, Left a flyer...
              </li>
            </ul>
          </li>
        </ul>
        Our house numbers and locations are already public in greater detail on
        the King County Parcel Viewer, as well as Google Maps, etc. If you'd
        like your house or status changed or removed, please send an email
        request to <a href="mailto:north.crown.hill@gmail.com">north.crown.hill@gmail.com</a>.
      </p>

      <h4>Private Data</h4>
      <p>
        These data are, when shared with organizers, recorded and kept internal
        to only the core organizer(s) of NCH:
        <ul>
          <li>First name(s)</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>
            True/false status of participation in:
            <ol>
              <li>email <Link to="/newsletter/">newsletter</Link></li>
              <li>neighborhood <Link to="/chat/">chat</Link></li>
              <li>phone <Link to="/hotline/">hotline</Link></li>
            </ol>
          </li>
          <li>Short notes about interactions, context, status</li>
        </ul>
        This information is kept confidential, and is <b>not</b> shared with
        neighbors except under the explicit request of the sharer. Last names
        are deliberatly excluded from recording, as they are unneeded.
      </p>

      <h4>Email and Slack data handling</h4>
      <p>
        No email leakage via mass direct emails or mass BCCs: The newsletter
        uses Mailchimp to enforce industry-standard practices for email privacy.
        No newsletter recipient can discover any other recipient's email. Every
        newsletter contains an unsubscribe link.
      </p>
      <p>
        Slack is configured to hide users' email addresses. Only residents with
        verified house addresses in our boundary area are sent invites. No
        mass/open invites allowed, and members may not invite others without
        admin approval.
      </p>

      <h4>Privacy Recommendations for Residents</h4>
      <ul>
        <li>
          Our total neighborhood size is approximately 350 households. Think
          about your trust level at that size.
        </li>
        <li>
          It is common practice to share one's house address in Slack, but if
          that feels risky for you, please abstain.
        </li>
        <li>There's no need to use your last name in Slack.</li>
        <li>
          Your profile picture in Slack doesn't need to be be "real" or contain
          identifying information.
        </li>
        <li>
          Message editing and deletion are enabled, so if you feel you've
          overshared, you can redact the chat record.
        </li>
        <li>
          Slack channels are visible to all members, even if they are not
          currently "in" that channel. If you'd like to share contact
          information with specific people, use a Direct Message instead of
          posting in a channel.
        </li>
        <li>
          Administrators can not see or export your private messages. 
          Please report any harrassment or abuse ASAP to <a href="mailto:north.crown.hill@gmail.com">north.crown.hill@gmail.com</a>
        </li>
      </ul>
      <h4>Privacy Policy Changelog</h4>
      <ul>
        <li>2020-03-22 First version published</li>
        <li>2020-04-23 Light wordage touch-up + adding links. No intentional policy change.</li>
      </ul>
      <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
)
