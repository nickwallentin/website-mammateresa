import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import AlcoholFreeMenu from "../../components/menu/alcoholfreemenu"
import OtherDrinksMenu from "../../components/menu/otherdrinksmenu"

const AlcoholFreePage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Alkoholfria drycker</h1>
          <OtherDrinksMenu />
          <AlcoholFreeMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default AlcoholFreePage
