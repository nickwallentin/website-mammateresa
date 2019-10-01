import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Sec, Wrap } from "../components/styled"

const PressItem = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid black;
  &:last-of-type {
    border: none;
  }
  span {
    display: block;
  }
`

const PressPage = () => {
  const { allAirtable } = useStaticQuery(graphql`
    query getAllArticles {
      allAirtable(filter: { table: { eq: "Press" } }) {
        edges {
          node {
            id
            data {
              Rubrik
              L_nk
              Media
            }
          }
        }
      }
    }
  `)
  console.log(allAirtable)
  return (
    <Layout>
      <SEO title="Press"></SEO>
      <Sec>
        <Wrap style={{ width: "500px", maxWidth: "95%" }}>
          <h1>Press</h1>
          {allAirtable.edges.map(({ node: press }) => (
            <PressItem key={press.id}>
              <a
                href={press.data.L_nk}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong style={{ textDecoration: "underline" }}>
                  {press.data.Rubrik}
                </strong>
                <span>{press.data.Media}</span>
              </a>
            </PressItem>
          ))}
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default PressPage
