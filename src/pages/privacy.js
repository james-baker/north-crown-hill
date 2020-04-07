import React from "react"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <h1>Privacy Policy</h1>
      <p>
        This describes the data handling practices of North Crown Hill regarding
        data security and privacy.
      </p>
      <h4>Public Data</h4>
      <p>
        These data are publicly displayed on the website:
        <ul>
          <li>The geographic locations of households within the NCH area.</li>
          <li>
            The contact status of each household, relative to our outreach
            effort
            <ul>
              <li>
                Examples: Uncontacted, Left a flyer, Declined, Have Email...
              </li>
            </ul>
          </li>
        </ul>
        Our house numbers and locations are already public in greater detail on
        the King County Parcel Viewer, as well as Google Maps, etc. If you'd
        like your house or status changed or removed, please send an email
        request.
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
            True/false status of inclusion in: 1) Newsletter, 2) Chat, 3)
            Directory
          </li>
          <li>Short notes about interactions, context, status</li>
        </ul>
        This information is kept confidential, and is <b>not</b> shared with
        neighbors except under the explicit request of the sharer. Last names
        are deliberatly <b>not</b> recorded at all, so as to make our data less
        valuable to any outside attacker.
      </p>

      <h4>Neighborhood Shared Data</h4>
      <p>
        The contact directory is not yet formed. When it is created, it will be
        completely opt-in. Design is underway.
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
          lots of identifying information.
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
      </ul>
      <p>&nbsp;</p>
    </div>

    <div class="footer l-box is-center">
      Established 2020-03-14, NCH is a neighborhood community support network in
      Seattle, WA, USA.
    </div>
  </Layout>
)
