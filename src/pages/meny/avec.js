import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import AvecMenu from "../../components/menu/avecmenu"

const AvecPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Avec till kaffe, glass och dessert</h1>
          <AvecMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default AvecPage
