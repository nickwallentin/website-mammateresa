import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import SaladMenu from "../../components/menu/saladmenu"

const SaladPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Våra sallader</h1>
          <SaladMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default SaladPage
