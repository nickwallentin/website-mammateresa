import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import CoffeeMenu from "../../components/menu/coffeemenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const CoffeePage = () => {
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
          <h1>Vårt kaffe</h1>
          <CoffeeMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default CoffeePage
