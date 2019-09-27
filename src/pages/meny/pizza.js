import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import PizzaMenu from "../../components/menu/pizzamenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

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
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default PizzaPage
