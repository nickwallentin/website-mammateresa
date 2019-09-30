import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Sec, Wrap, Grid, Col } from "../../styled"

import WhiteArrowRight from "../../../assets/white-arrow-right.svg"

const LineLink = styled(Link)`
  display: block;
  padding: 10px 0px;
  border-bottom: 1px solid white;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    transition: all 200ms;
    transform: translateX(-15px);
  }
  &:hover svg {
    transform: translateX(0px);
  }

  &:last-of-type {
    border-bottom: 0px;
    font-style: italic;
    display: block;
    text-decoration: underline;
    margin-top: 20px;
  }
`

const IndexMenuSection = () => {
  const data = useStaticQuery(graphql`
    query IndexMenuImage {
      file(name: { eq: "mt-pizza-ingredients" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Sec>
      <Wrap>
        <Col
          style={{ maxWidth: "500px", textAlign: "center", margin: "0 auto" }}
        >
          <h2>
            Traditionell italiensk{" "}
            <span style={{ color: "#016739" }}>restaurang</span> &{" "}
            <span style={{ color: "#EB1B30" }}>pizzeria</span>.
          </h2>
          <p>
            Mamma Teresa är en italiensk oas i centrala Landskrona. Kvalitet är
            av största vikt för oss och vi vill leverera en äkta italiensk
            smakupplevelse.
          </p>
        </Col>
        <Img
          style={{ marginBottom: "50px" }}
          fluid={data.file.childImageSharp.fluid}
        />

        <Grid
          gap="80px"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          cols="1fr 2fr"
        >
          <div
            style={{ background: "#465237", color: "white", padding: "40px" }}
          >
            <h3 style={{ fontSize: "3rem", marginBottom: "15px" }}>Meny</h3>
            <span className="white-line" />
            <p style={{ fontStyle: "italic", color: "#ffffff90" }}>
              menu del ristorante
            </p>
            <LineLink to="/meny/pizza">
              Ugnsbakade pizzor <WhiteArrowRight />
            </LineLink>
            <LineLink to="/meny/pasta">
              Klassiska pastarätter <WhiteArrowRight />
            </LineLink>
            <LineLink to="/meny/barn">
              Vår barnmeny <WhiteArrowRight />
            </LineLink>
            <LineLink to="/meny">Se hela vår meny</LineLink>
          </div>
          <Col flex col justify="center">
            <h4>
              Mamma Teresa är en italiensk oas i centrala Landskrona. Här lagar
              vi delikatesser med fina råvaror från Medelhavsländerna.
            </h4>
            <p>
              Mjölet vi bakar våra pizzor och vårt bröd på är från durumvete
              odlat på närbelägna Hven. Kvalitet är av största vikt för oss och
              vi vill leverera en äkta italiensk smakupplevelse.Mamma Teresa är
              en italiensk oas i centrala Landskrona. Här lagar vi delikatesser
              med fina råvaror från Medelhavsländerna. Mjölet vi bakar våra
              pizzor och vårt bröd på är från durumvete odlat på närbelägna
              Hven. Kvalitet är av största vikt för oss och vi vill leverera en
              äkta italiensk smakupplevelse.
            </p>
          </Col>
        </Grid>
      </Wrap>
    </Sec>
  )
}

export default IndexMenuSection
