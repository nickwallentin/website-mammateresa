import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import SaladMenu from "../../components/menu/saladmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const SaladPage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Sallader" />
      <Sec>
        <Wrap>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
            to="/meny"
          >
            <BlackArrowRight
              style={{ transform: "rotateZ(180deg)", marginRight: "15px" }}
            />
            Tillbaka till menyn
          </Link>
          <h1>Våra sallader</h1>
          <SaladMenu />
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
            to="/meny"
          >
            <BlackArrowRight
              style={{ transform: "rotateZ(180deg)", marginRight: "15px" }}
            />
            Tillbaka till menyn
          </Link>
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default SaladPage
