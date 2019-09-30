import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-gap: 10px;
  padding: 10px 10px;
  &:nth-child(2n) {
    background: #00000010;
  }
  .name {
    font-weight: 900;
  }
  .price {
    text-align: right;
    span.special {
      display: block;
      font-size: 14px;
    }
  }
`
const MenuItemsContainer = styled.div`
  padding: 40px 0px;
  h3 {
    background: white;
    padding: 10px 40px 10px 0px;
    display: inline-block;
    position: relative;
    z-index: 2;
  }
  .break-line {
    display: block;
    width: 100%;
    height: 2px;
    background: black;
    position: absolute;
    top: 35%;
  }
`

const RoseWineMenu = () => {
  const data = useStaticQuery(graphql`
    query RoseWineQuery {
      allAirtable(
        filter: {
          table: { eq: "Drinkmeny" }
          data: { Typ: { eq: "Röda viner" } }
        }
        sort: { fields: data___order, order: ASC }
      ) {
        edges {
          node {
            id
            data {
              Namn
              Body
              Pris_std
              Pris_spec
              Alkoholhalt
            }
          }
        }
      }
    }
  `)
  return (
    <MenuItemsContainer>
      <div>
        <h3>Rosévin</h3>
        <span className="break-line" />
      </div>
      <div>
        {data.allAirtable.edges.map(({ node }) => (
          <MenuItem key={node.id}>
            <div className="name">{node.data.Namn}</div>
            <div className="body">{node.data.Body}</div>
            <div className="price">
              {node.data.Pris_std && node.data.Pris_spec ? (
                <>
                  {node.data.Pris_std}:-/glas{" "}
                  <span className="special">
                    {node.data.Pris_spec}:-/flaska
                  </span>
                </>
              ) : node.data.Pris_std ? (
                node.data.Pris_std + ":-/glas"
              ) : node.data.Pris_spec ? (
                node.data.Pris_spec + ":-/flaska"
              ) : null}
            </div>
          </MenuItem>
        ))}
      </div>
    </MenuItemsContainer>
  )
}

export default RoseWineMenu
