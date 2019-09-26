import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import CoffeeMenu from "../../components/menu/coffeemenu"

const CoffeePage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Vårt kaffe</h1>
          <CoffeeMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default CoffeePage
