import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
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

const DishesMenu = () => {
  const data = useStaticQuery(graphql`
    query DishesQuery {
      allAirtable(
        filter: {
          table: { eq: "Meny" }
          data: { Typ: { eq: "Varmrätter kött" } }
        }
        sort: { fields: data___order, order: ASC }
      ) {
        edges {
          node {
            id
            data {
              Namn
              Body
              Pris
            }
          }
        }
      }
    }
  `)
  return (
    <MenuItemsContainer>
      <div>
        <h3>Varmrätter kött</h3>
        <span className="break-line" />
      </div>
      <div>
        {data.allAirtable.edges.map(({ node }) => (
          <MenuItem key={node.id}>
            <div className="name">{node.data.Namn}.</div>
            <div className="body">{node.data.Body}</div>
            <div className="price">{node.data.Pris}:- </div>
          </MenuItem>
        ))}
      </div>
    </MenuItemsContainer>
  )
}

export default DishesMenu
