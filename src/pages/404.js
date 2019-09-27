import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Sec, Wrap } from "../components/styled"

const NotFoundPage = () => (
  <Layout>
    <SEO lang="sv" title="404: Sidan finns inte" />
    <Sec>
      <Wrap style={{ textAlign: "center" }}>
        <h1>404: Denna sida finns inte.</h1>
        <p>Denna sidan finns tyvärr inte.</p>
        <Link to="/">Tillbaka till startsidan</Link>
      </Wrap>
    </Sec>
  </Layout>
)

export default NotFoundPage
