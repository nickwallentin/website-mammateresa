import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import PastaMenu from "../../components/menu/pastamenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const PastaPage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Pasta" />
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
          <h1>Våra pastarätter</h1>
          <PastaMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default PastaPage
