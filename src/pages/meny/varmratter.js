import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap } from "../../components/styled"

import DishesMenu from "../../components/menu/dishesmenu"

const DishesPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap>
          <h1>Våra varmrätter</h1>
          <DishesMenu />
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default DishesPage
