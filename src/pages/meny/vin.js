import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Sec, Wrap } from "../../components/styled"

import SparklingWineMenu from "../../components/menu/sparklingwine"
import RedWineMenu from "../../components/menu/redwinemenu"
import WhiteWineMenu from "../../components/menu/whitewinemenu"
import RoseWineMenu from "../../components/menu/rosewinemenu"
import BlackArrowRight from "../../assets/black-arrow-right.svg"

const WinePage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Viner" />
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
          <h1>Viner</h1>

          <SparklingWineMenu />
          <RoseWineMenu />
          <RedWineMenu />
          <WhiteWineMenu />

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

export default WinePage
