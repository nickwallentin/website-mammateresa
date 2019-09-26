import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import BottleBeerMenu from "../../components/menu/bottlebeermenu"
import TapBeerMenu from "../../components/menu/tapbeermenu"
import CiderMenu from "../../components/menu/cidermenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const BeerPage = () => {
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
          <h1>Öl & Cider</h1>
          <BottleBeerMenu />
          <TapBeerMenu />
          <CiderMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default BeerPage
