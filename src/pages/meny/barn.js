import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import ChildMenu from "../../components/menu/childmenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const ChildrenPage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Barnmeny" />
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
          <h1>Maträtter för barnen</h1>
          <ChildMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default ChildrenPage
