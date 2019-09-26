import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import SandwichMenu from "../../components/menu/sandwichmenu"

const SandwichPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Våra sandwiches</h1>
          <SandwichMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default SandwichPage
