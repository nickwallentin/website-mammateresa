import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import AlcoholFreeMenu from "../../components/menu/alcoholfreemenu"
import OtherDrinksMenu from "../../components/menu/otherdrinksmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const AlcoholFreePage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Alkoholfritt" />
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
          <h1>Alkoholfria drycker</h1>

          <OtherDrinksMenu />
          <AlcoholFreeMenu />
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

export default AlcoholFreePage
