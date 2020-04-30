import React from "react"
import "./mailchimparchive.css"

const ArchiveLink = props => (
  <li class="campaign">{props.date} - <a href={props.to} title={props.children}>{props.children}</a>
  </li>
)

export default () => <div>
  <p>Some recent newsletters:</p>
  <ul id="archive-list">
    <div class="display_archive">
      <ArchiveLink to="/newsletter-archive/20200428.html" date="04/28/2020">North Crown Hill: Community Hotline!</ArchiveLink>
      <ArchiveLink to="/newsletter-archive/20200408.html" date="04/08/2020">North Crown Hill News, April 8th"</ArchiveLink>
      <ArchiveLink to="/newsletter-archive/20200330.html" date="03/30/2020">North Crown Hill News, March 30th"</ArchiveLink>
      <ArchiveLink to="/newsletter-archive/20200321.html" date="03/21/2020">North Crown Hill News, March 21st"</ArchiveLink>
      <ArchiveLink to="/newsletter-archive/20200316.html" date="03/16/2020">"North Crown Hill launches!"</ArchiveLink>
    </div>
  </ul>
</div>