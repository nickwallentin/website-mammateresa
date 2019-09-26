import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import BottleBeerMenu from "../../components/menu/bottlebeermenu"
import TapBeerMenu from "../../components/menu/tapbeermenu"
import CiderMenu from "../../components/menu/cidermenu"

const BeerPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
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
