import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import DessertMenu from "../../components/menu/dessertmenu"

const DessertPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Våra italienska desserter</h1>
          <DessertMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default DessertPage
