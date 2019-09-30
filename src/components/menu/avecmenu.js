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
    .special {
      display: block;
      font-size: 90%;
      color: #00000090;
      font-weight: 300;
    }
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

const AvecMenu = () => {
  const data = useStaticQuery(graphql`
    query AvecQuery {
      allAirtable(
        filter: { table: { eq: "Drinkmeny" }, data: { Typ: { eq: "Avec" } } }
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
        <h3>Avec</h3>
        <span className="break-line" />
      </div>
      <div>
        {data.allAirtable.edges.map(({ node }) => (
          <MenuItem key={node.id}>
            <div className="name">
              {node.data.Namn}{" "}
              <span className="special">{node.data.Alkoholhalt * 100}%</span>
            </div>
            <div className="body">{node.data.Body}</div>
            <div className="price">
              {node.data.Pris_std && node.data.Pris_spec ? (
                <>
                  {node.data.Pris_std}:-/4 cl{" "}
                  <span className="special">{node.data.Pris_spec}:-/6 cl</span>
                </>
              ) : node.data.Pris_std ? (
                node.data.Pris_std + ":-/4 cl"
              ) : node.data.Pris_spec ? (
                node.data.Pris_spec + ":-/6 cl"
              ) : null}
            </div>
          </MenuItem>
        ))}
      </div>
    </MenuItemsContainer>
  )
}

export default AvecMenu
