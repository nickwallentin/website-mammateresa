import { Grid, Sec, Wrap } from "../components/styled"

import BreadMenu from "../components/menu/breadmenu"
import ChildrenMenu from "../components/menu/childmenu"
import DessertMenu from "../components/menu/dessertmenu"
import DishesMenu from "../components/menu/dishesmenu"
import Layout from "../components/layout"
import { Link } from "gatsby"
import PastaMenu from "../components/menu/pastamenu"
import PizzaMenu from "../components/menu/pizzamenu"
import PreMenu from "../components/menu/premenu"
import React from "react"
import SEO from "../components/seo"
import SaladMenu from "../components/menu/saladmenu"
import SandwichMenu from "../components/menu/sandwichmenu"
import styled from "styled-components"

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
