import React, { Component } from "react"
import "./mailchimparchive.css"

export default class MailchimpArchive extends Component {

  componentDidMount() {
    // this doesn't work - probably something about document.write, even though I'm trying to load "synchronously"?
    // const s = document.createElement('script');
    // s.type = "text/javascript";
    // s.language = "javascript";
    // s.async = false;
    // s.src = "//northcrownhill.us19.list-manage.com/generate-js/?u=22899abf63f333cc474ce3a93&fid=26428&show=20";
    // s.onload = (event) => alert(JSON.stringify(event));
    // let divElement = document.getElementById("ma574238952");
    // divElement.appendChild(s);

    // well, no, can't xhr to another domain because CORS
    // var xhrObj = new XMLHttpRequest();
    // xhrObj.open('GET', "//northcrownhill.us19.list-manage.com/generate-js/?u=22899abf63f333cc474ce3a93&fid=26428&show=20", false);
    // xhrObj.send(null);
    // let divElement = document.getElementById("ma574238952");
    // divElement.innerHTML = xhrObj.responseText;
  }

  render() {
    //return <div id="ma574238952" />;
    return <ul id="archive-list">
      <div class="display_archive">
      <li class="campaign">04/08/2020 - <a href="http://us19.campaign-archive.com/?u=22899abf63f333cc474ce3a93&id=0a84af55e7" title="North Crown Hill News, April 8th" target="_blank" rel="noopener noreferrer">North Crown Hill News, April 8th</a></li>
      <li class="campaign">03/31/2020 - <a href="http://us19.campaign-archive.com/?u=22899abf63f333cc474ce3a93&id=6bb61a9654" title="North Crown Hill News, March 30th" target="_blank" rel="noopener noreferrer">North Crown Hill News, March 30th</a></li>
      <li class="campaign">03/22/2020 - <a href="http://us19.campaign-archive.com/?u=22899abf63f333cc474ce3a93&id=1b44a196fb" title="North Crown Hill News, March 21st" target="_blank" rel="noopener noreferrer">North Crown Hill News, March 21st</a></li>
      <li class="campaign">03/16/2020 - <a href="http://us19.campaign-archive.com/?u=22899abf63f333cc474ce3a93&id=56c7b00d94" title="North Crown Hill launches!" target="_blank" rel="noopener noreferrer">North Crown Hill launches!</a></li>
      </div>
      </ul>;
  }
}