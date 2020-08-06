import React from "react"
import { Link } from "gatsby"
import "../components/index.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="beta-request">
      <div class="header">
        <h3 class="title">Beta tester form</h3>
        <span class="subtitle">Leave your info and become a beta tester!</span>
      </div>
      <div class="body">
        <form class="form">
          <div class="group general-info">
            <input class="field name" type="text" placeholder="Name" />
            <input class="field surname" type="text" placeholder="Surname" />
          </div>
          <div class="group contact-info">
            <input class="field email" type="text" placeholder="Email" />
            <input class="field phone" type="text" placeholder="Phone" />
          </div>
          <input class="button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage
