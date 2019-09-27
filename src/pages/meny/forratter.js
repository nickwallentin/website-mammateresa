import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import PreMenu from "../../components/menu/premenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const PrePage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Förrätter" />
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
          <h1>Våra förrätter</h1>
          <PreMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default PrePage
