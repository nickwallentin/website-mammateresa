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

const SocialFollow = styled.a`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  border: 2px solid #d8d8d8;
  font-style: italic;
  color: black;
  text-decoration: none;
`

const IndexSocialSection = () => {
  return <p>temp</p>
}

/*
const IndexSocialSection = () => {
  const data = useStaticQuery(graphql`
    query getInstagramPosts {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 8) {
        edges {
          node {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Sec>
      <Wrap>
        <SectionBreak>
          <span className="break-line" />
          <h2>Följ Mamma Teresa</h2>
        </SectionBreak>
        <Grid cols="1fr 1fr 1fr 1fr" mcols="1fr 1fr">
          {data.allInstaNode.edges.map(({ node: insta }) => {
            return (
              <div key={insta.id}>
                <Img fluid={insta.localFile.childImageSharp.fluid} />
              </div>
            )
          })}
        </Grid>
        <Grid cols="1fr 1fr">
          <SocialFollow
            href="https://www.instagram.com/pizzeriamammateresa/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Se mer på Instagram
          </SocialFollow>
          <SocialFollow
            href="https://www.facebook.com/Pizzeria-Restaurang-Mamma-Teresa-164965443547208"
            rel="noopener noreferrer"
            target="_blank"
          >
            Se mer på Facebook
          </SocialFollow>
        </Grid>
      </Wrap>
    </Sec>
  )
        }
        */

export default IndexSocialSection
