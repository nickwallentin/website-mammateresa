import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import SparklingWineMenu from "../../components/menu/sparklingwine"
import RedWineMenu from "../../components/menu/redwinemenu"
import WhiteWineMenu from "../../components/menu/whitewinemenu"
import RoseWineMenu from "../../components/menu/rosewinemenu"

const WinePage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Viner</h1>

          <SparklingWineMenu />
          <RedWineMenu />
          <WhiteWineMenu />
          <RoseWineMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default WinePage
