import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Sec, Wrap, Grid, Col } from "../components/styled"

import SocialSection from "../components/ui/index/socialsection"

const CateringPage = () => {
  const data = useStaticQuery(graphql`
    query CateringImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "catering" } }) {
        edges {
          node {
            id

            childImageSharp {
              fluid(
                maxWidth: 1200
                maxHeight: 500
                quality: 90
                cropFocus: CENTER
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO lang="sv" title="Catering" />
      <Sec>
        <Wrap>
          <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </Wrap>
      </Sec>

      <Sec space="0px 0px 40px 0px">
        <Wrap>
          <h1>Catering</h1>
          <p style={{ width: "500px", maxWidth: "95%" }}>
            Bjud dina gäster på italiensk kvalitet. All vår mat finns för
            avhämtning och vi erbjuder också buffelösningar och catering. Vid
            större sällskap skickar vi gärna faktura.
          </p>
          <Grid cols="1fr 1fr">
            <div
              style={{
                background: "#00000010",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h3>Buffé 1</h3>
              <ul>
                <li>
                  Charkuterifat med salami Piccante, Parmaskinka, salami Napoli
                  och Bresaola.
                </li>

                <li>
                  Ett fat med mozzarellaost,cocktailtomater, rödlök, svartpeppar
                  och olivolja.
                </li>

                <li>
                  Ett fat med grillade grönsaker. (Squash, aubergine, paprika
                  kronärtskocka)
                </li>

                <li>
                  Ett fat med ostar. (Färskskivad parmesanost, krämig
                  gorgonzolaost, getost)
                </li>

                <li>
                  Pastasallad med ruccolasallad, semitorkade körsbärstomater,
                  mozzarellaost, oliver.
                </li>

                <li>Nybakat bröd av durumvete och bruschetta.</li>
              </ul>
              <div>
                För endast{" "}
                <span
                  style={{
                    display: "block",
                    fontSize: "34px",
                    fontWeight: "900",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  159:-
                </span>{" "}
                /person
              </div>
            </div>
            <div style={{ background: "#00000010", padding: "40px" }}>
              <h3>Buffé 2</h3>
              <ul>
                <li>
                  Charkuterifat med salami Piccante, Parmaskinka, salami Napoli
                  och Bresaola.
                </li>

                <li>
                  Ett fat med mozzarellaost,cocktailtomater, rödlök, svartpeppar
                  och olivolja.
                </li>

                <li>
                  Ett fat med grillade grönsaker. (Squash, aubergine, paprika
                  kronärtskocka)
                </li>

                <li>
                  Ett fat med ostar. (Färskskivad parmesanost, krämig
                  gorgonzolaost, getost)
                </li>

                <li>
                  Pastasallad med ruccolasallad, semitorkade körsbärstomater,
                  mozzarellaost, oliver.
                </li>

                <li>Nybakat bröd av durumvete och bruschetta.</li>
                <li>Tiramisutårta (italiensk dessert)</li>
              </ul>
              <div>
                För endast{" "}
                <span
                  style={{
                    display: "block",
                    fontSize: "34px",
                    fontWeight: "900",
                  }}
                >
                  179:-
                </span>{" "}
                /person
              </div>
            </div>
          </Grid>
        </Wrap>
      </Sec>
      {/* <SocialSection></SocialSection> */}
    </Layout>
  )
}

export default CateringPage
