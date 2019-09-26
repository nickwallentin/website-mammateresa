import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import SandwichMenu from "../../components/menu/sandwichmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const SandwichPage = () => {
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
          <h1>Våra sandwiches</h1>
          <SandwichMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default SandwichPage
