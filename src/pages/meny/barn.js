import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import ChildMenu from "../../components/menu/childmenu"

const ChildrenPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Maträtter för barnen</h1>
          <ChildMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default ChildrenPage
