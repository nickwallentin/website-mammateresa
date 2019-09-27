import React from "react"
import * as moment from "moment"
import "moment/locale/sv"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Wrap } from "../components/styled"

const SubNavWrapper = styled.div``

const SubNavContainer = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  font-size: 14px;
  display: flex;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    border-right: 2px solid black;
    padding: 10px;
    font-style: italic;
    text-align: center;
    line-height: 1.4em;
    &:last-of-type {
      border-right: 0px;
    }
  }

  & div a strong {
    display: block;
  }
`

const SubNav = () => {
  const data = useStaticQuery(graphql`
    query OpeningHours {
      allAirtable(filter: { table: { eq: "Öppettider" } }) {
        edges {
          node {
            id
            data {
              Dag
              _ppnar
              St_nger
            }
          }
        }
      }
    }
  `)

  const displayDayTime = () => {
    const today = moment()
      .day(moment().day())
      .format("dddd")

    const getTodayData = data.allAirtable.edges.filter(item => {
      return item.node.data.Dag.toLowerCase() == today.toLowerCase()
    })
    const todaysData = getTodayData[0].node.data
    return (
      <>
        <span className="hide-mobile">{todaysData.Dag},</span> kl{" "}
        {todaysData._ppnar} - {todaysData.St_nger}
      </>
    )
  }
  return (
    <SubNavWrapper>
      <Wrap>
        <SubNavContainer>
          <div>
            <Link to="/kontakt">
              <strong style={{ marginRight: "5px" }}>
                <span className="hide-mobile">Boka & Beställ:</span>
                <span className="hide-desktop">Ring:</span>
              </strong>
              0418-194 30
            </Link>
          </div>
          <div>
            <Link to="/info/oppettider">
              <strong style={{ marginRight: "5px" }}>
                Öppet<span className="hide-desktop"> idag</span>:{" "}
              </strong>{" "}
              {displayDayTime()}
            </Link>
          </div>
          <div>
            <Link to="/info/hitta-hit">
              <strong style={{ marginRight: "5px" }}>Hitta hit: </strong>{" "}
              Storgatan 27<span className="hide-mobile">, Landskrona</span>
            </Link>
          </div>
        </SubNavContainer>
      </Wrap>
    </SubNavWrapper>
  )
}

export default SubNav
