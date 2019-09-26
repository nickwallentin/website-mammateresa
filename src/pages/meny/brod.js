import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import BreadMenu from "../../components/menu/breadmenu"

const BreadPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Vårt bröd</h1>
          <BreadMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default BreadPage
