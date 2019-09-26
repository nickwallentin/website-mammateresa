import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import DessertMenu from "../../components/menu/dessertmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const DessertPage = () => {
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
          <h1>Våra italienska desserter</h1>
          <DessertMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default DessertPage
