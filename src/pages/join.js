import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default ({ data }) => (
  <Layout>
    <div class="content">
      <h1>Join</h1>
      <p>If you a a resident within the North Crown Hill boundaries, you can join us! Just submit the form below, 
        and then wait a day or two to receive a welcome email. If you don't hear back within 72 hours, or have any 
        questions at all, feel free to email <a href="mailto:north.crown.hill@gmail.com">north.crown.hill@gmail.com</a>
      </p>
      <p>If you don't have an email address, enter your phone number instead, and you'll get a call with our hotline number.</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0XX0C9AmW6jObL_pOjR8lNXa8cpkWdXPXBseBBKeVfs5XaQ/viewform?embedded=true"
        title="NCH Signup Form" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      <p>&nbsp;</p>
    </div>
    <Footer />
  </Layout>
)
