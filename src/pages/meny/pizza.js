import { Sec, Wrap } from "../../components/styled"

import BlackArrowRight from "../../assets/black-arrow-right.svg"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import PizzaMenu from "../../components/menu/pizzamenu"
import React from "react"
import SEO from "../../components/seo"

const PizzaPage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Pizza" />
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
          <h1>Våra pizzor</h1>
          <PizzaMenu />

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

export default PizzaPage
