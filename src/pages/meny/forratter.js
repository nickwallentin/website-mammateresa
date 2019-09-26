import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import PreMenu from "../../components/menu/premenu"

const PrePage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Våra förrätter</h1>
          <PreMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default PrePage
