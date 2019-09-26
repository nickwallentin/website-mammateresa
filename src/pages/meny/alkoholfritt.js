import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import AlcoholFreeMenu from "../../components/menu/alcoholfreemenu"
import OtherDrinksMenu from "../../components/menu/otherdrinksmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const AlcoholFreePage = () => {
  return (
    <Layout>
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
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default AlcoholFreePage
