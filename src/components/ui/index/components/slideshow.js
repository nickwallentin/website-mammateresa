import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const SlideShowContainer = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  overflow: hidden;
  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

const SlideShow = () => {
  const { allFile } = useStaticQuery(graphql`
    query SlideShowImages {
      allFile(filter: { relativeDirectory: { eq: "slides" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const rgn = Math.floor(Math.random() * (allFile.edges.length - 0)) + 0
  return (
    <SlideShowContainer>
      <Img fluid={allFile.edges[rgn].node.childImageSharp.fluid} />
    </SlideShowContainer>
  )
}

export default SlideShow
