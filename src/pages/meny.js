import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Sec, Wrap, Grid } from "../components/styled"

import PreMenu from "../components/menu/premenu"
import PizzaMenu from "../components/menu/pizzamenu"
import PastaMenu from "../components/menu/pastamenu"
import DishesMenu from "../components/menu/dishesmenu"
import ChildrenMenu from "../components/menu/childmenu"
import SandwichMenu from "../components/menu/sandwichmenu"
import BreadMenu from "../components/menu/breadmenu"
import SaladMenu from "../components/menu/saladmenu"
import DessertMenu from "../components/menu/dessertmenu"

const MenuLinks = styled.div`
  a {
    display: block;
    border-bottom: 1px solid #ffffff20;
    padding: 10px 0px;
    color: white;
    &:last-of-type {
      margin-bottom: 20px;
      border-bottom: 0px;
    }
  }
  h4 {
    font-family: "Georgia";
    font-style: normal;
  }
`

const MenuPage = () => {
  return (
    <Layout>
      <SEO lang="sv" title="Meny" />
      <Sec>
        <Wrap>
          <h1>Meny</h1>
          <Grid cols="1fr 3fr" gap="40px">
            <div
              style={{ padding: "20px", background: "#465237", color: "white" }}
            >
              <MenuLinks>
                <h4>Att äta</h4>
                <Link to="/meny/forratter">Förrätter</Link>
                <Link to="/meny/pizza">Pizza</Link>
                <Link to="/meny/pasta">Pasta</Link>
                <Link to="/meny/varmratter">Varmrätter kött</Link>
                <Link to="/meny/barn">Barnmeny</Link>
                <Link to="/meny/sandwich">Italiensk sandwich</Link>
                <Link to="/meny/brod">Italienskt hembakat bröd</Link>
                <Link to="/meny/sallader">Sallader</Link>
                <Link to="/meny/dessert">Dessert</Link>
              </MenuLinks>
              <MenuLinks>
                <h4>Att dricka</h4>
                <Link to="/meny/vin">Vin</Link>
                <Link to="/meny/ol-cider">Öl & cider</Link>

                <Link to="/meny/kaffe">Kaffe</Link>
                <Link to="/meny/avec">Avec</Link>
                <Link to="/meny/alkoholfritt">Alkoholfritt</Link>
              </MenuLinks>
            </div>
            <div>
              <PreMenu />
              <PizzaMenu />
              <PastaMenu />
              <SandwichMenu />
              <BreadMenu />
              <ChildrenMenu />
              <SaladMenu />
              <DishesMenu />
              <DessertMenu />
            </div>
          </Grid>
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default MenuPage
