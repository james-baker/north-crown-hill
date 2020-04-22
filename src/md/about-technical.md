# Technical Architecture

Want to create your own neighborhood communications hub? Here are the architectural details of what I've made - hopefully readable by most anyone, though only implementable by someone who is comfortable coding.

### Website

The first version of this website was hand-rolled HTML, using the tiny [Pure CSS](https://purecss.io/) library for styling. That lasted about two weeks and three pages until I was already making copy-paste replication errors: time to do it "the right way" with modern technology. The current site uses the [Gatsby.js](https://www.gatsbyjs.org/) framework to build a [React](https://reactjs.org/) app that gets deployed/hosted using [Netlify](https://www.netlify.com/).  Gatsby is a static site generator, so while I'm technically writing a [Node.js](https://nodejs.org/en/about/) application, the app is really a compiler that produces static output files consisting of HTML, CSS, and JavaScript. The site is open source and you can see all my code in the [north-crown-hill](https://github.com/james-baker/north-crown-hill) code repository.

### Hotline

The community hotline is a VOIP phone number via [Twilio](https://www.twilio.com/), a software-based telephony platform. A number costs $1 per month, and their [voice services pricing](https://www.twilio.com/voice/pricing/us) is quite small per-call.  5 cents for a transcription, which I find useful even though their transcription quality is much worse than Google's. The rest is about 1 penny for a short call, so I doubt the overall cost will break $2 per month.

Calling the phone number triggers an HTTP call to a URL of my choice.  My code for that can be found [here on Github](https://github.com/james-baker/north-crown-hill-functions/tree/master/functions), and returns a snippet of XML instructions that says "play this sound file, then record a message and send it to this other URL". My code also connects to the NCH Slack site through a minimal [Slack app](https://api.slack.com/start/overview) bot, so whenever Twilio calls my code I post a message in a Slack channel, passing through the information about the call/recording/transcription from Twilio.

That [north-crown-hill-functions](https://github.com/james-baker/north-crown-hill-functions) code repository is completely separate from the website, and I use [Netlify](https://www.netlify.com/) to deploy that code for free.  (While Netlify is known for its static website hosting, it also supports application code via the [AWS Lambda](https://www.netlify.com/products/functions/) service.)

I'll probably log some call details to Google Sheets soon as well, so we have a bit more durable record than the Slack messages.