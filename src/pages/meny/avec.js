import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import AvecMenu from "../../components/menu/avecmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const AvecPage = () => {
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
          <h1>Avec till kaffe, glass och dessert</h1>
          <AvecMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default AvecPage
