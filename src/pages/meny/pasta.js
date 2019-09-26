import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import PastaMenu from "../../components/menu/pastamenu"

const PastaPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Våra pastarätter</h1>
          <PastaMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default PastaPage
