import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Sec, Wrap, Grid, Col } from "../../styled"

const SectionBreak = styled.div`
  text-align: center;
  h2 {
    background: white;
    padding: 20px;
    display: inline-block;

    position: relative;
  }
  .break-line {
    display: block;
    width: 100%;
    height: 2px;
    background: black;
    position: absolute;
    top: 40%;
  }
`

const IndexCateringSection = () => {
  const data = useStaticQuery(graphql`
    query GetCateringImage {
      file(name: { eq: "mt-catering" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Sec>
      <Wrap>
        <SectionBreak>
          <span class="break-line" />
          <h2>Catering</h2>
        </SectionBreak>

        <Grid gap="0px" mgap="0px" cols="1fr 1fr">
          <div>
            <Img fluid={data.file.childImageSharp.fluid}></Img>
          </div>
          <Col
            flex
            col
            justify="center"
            space="40px"
            style={{ color: "white", background: "#465237" }}
          >
            <h3>Bjud gästerna på italiensk kvalitet.</h3>
            <p style={{ color: "#ffffff90" }}>
              Mamma Teresa erbjuder även catering. Bjud dina gäster på italiensk
              mat av högsta kvalitet.
            </p>
          </Col>
        </Grid>
      </Wrap>
    </Sec>
  )
}

export default IndexCateringSection
