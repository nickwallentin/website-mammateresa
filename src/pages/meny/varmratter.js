import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import DishesMenu from "../../components/menu/dishesmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const DishesPage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Varmrätter" />
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
          <h1>Våra varmrätter</h1>
          <DishesMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default DishesPage
