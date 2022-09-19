import React from "react"
import * as moment from "moment"
import "moment/locale/sv"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Sec, Wrap } from "../../components/styled"

import SocialSection from "../../components/ui/index/socialsection"

const DayTimeCell = styled.div`
  display: flex;
  max-width: 400px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px dashed #00000040;
  &:last-of-type {
    border-bottom: none;
  }
  &.today {
    background: #c3d6c3;
  }
`

const OpeningHoursPage = () => {
  const data = useStaticQuery(graphql`
    query allOpeningHours {
      allAirtable(
        filter: { table: { eq: "Öppettider" } }
        sort: { fields: data___Order }
      ) {
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
  const today = moment()
    .day(moment().day())
    .format("dddd")
  const getTodayData = data.allAirtable.edges.filter(item => {
    return item?.node?.data?.Dag?.toLowerCase() === today.toLowerCase()
  })
  const todaysData = getTodayData[0].node.data

  return (
    <Layout>
      <SEO lang="sv" title="Öppettider" />
      <Sec style={{ textAlign: "center" }}>
        <Wrap style={{ width: "500px", maxWidth: "90%", textAlign: "center" }}>
          <h1>
            Öppettider <span>Välkommen in</span>
          </h1>
          <div>
            {data.allAirtable.edges.map(({ node: item }) => {
              return (
                <DayTimeCell
                  className={
                    today === item?.data?.Dag?.toLowerCase() ? "today" : null
                  }
                >
                  <div className="day">
                    <strong>{item.data.Dag}:</strong>
                  </div>
                  <div className="time">
                    {item.data._ppnar} - {item.data.St_nger}
                  </div>
                </DayTimeCell>
              )
            })}
          </div>
        </Wrap>
      </Sec>

    </Layout>
  )
}

export default OpeningHoursPage
