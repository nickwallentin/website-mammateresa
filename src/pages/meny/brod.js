import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import BreadMenu from "../../components/menu/breadmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const BreadPage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Italienskt bröd" />
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
          <h1>Vårt bröd</h1>
          <BreadMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default BreadPage
