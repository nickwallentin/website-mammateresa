import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import PizzaMenu from "../../components/menu/pizzamenu"

const PizzaPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Våra pizzor</h1>
          <PizzaMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default PizzaPage
