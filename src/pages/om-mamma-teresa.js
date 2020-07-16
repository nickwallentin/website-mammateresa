import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Sec, Wrap, Grid, Col } from "../components/styled"

import SocialSection from "../components/ui/index/socialsection"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutImagesQuery {
      allFile(
        filter: { relativeDirectory: { eq: "about" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO lang="sv" title="Om mamma teresa"></SEO>
      <Sec>
        <Wrap>
          <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </Wrap>
      </Sec>
      <Sec>
        <Wrap>
          <Col style={{ maxWidth: "95%", width: "600px", margin: "0 auto" }}>
            <h1>Om Mamma Teresa</h1>
            <p>
              I mars 2008 öppnade vi den första pizzeria Mamma Teresa i
              Landskrona. Lokalen var på 40 m2 och vi hade bara ett litet bord
              och plats för 8-10 sittande gäster inomhus. Vi satsade redan från
              början på lokala råvaror i kombination med italienska delikatesser
              och specialiteter och vi har aldrig kompromissat med kvaliteten.
              Våra pizzor och bröd bakas med lokalodlat durumvete från Hven och
              i kombination med äkta parmaskinka, salami, nyriven parmesanost
              och mozzarella blir vår mat som en resa till italien utan att
              lämna Landskrona. Mamma Teresa har fått ett flertal utmärkelser
              bland dem är{" "}
              <strong style={{ color: "black" }}>Årets Restaurang 2008</strong>{" "}
              och första pris under kulturnatten.
            </p>
          </Col>
        </Wrap>
      </Sec>
      <Sec>
        <Wrap>
          <Grid gap="0px" mgap="0px" cols="1fr 1fr">
            <div>
              <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
            </div>
            <div
              style={{
                padding: "40px",
                background: "#00000010",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h4>
                Den hjärtliga pizzerian i den lilla lokalen blev en stor succé
              </h4>
              ...och i augusti 2015 flyttade vi in på ny adress ett stenkast
              därifrån i lokalen där Landskronas första pizzeria låg. Nya Mamma
              Teresa på Storgatan 27 bjuder på 200 m2 nyrenoverad lokal med ett
              femtiotal sittplatser inomhus, utökad meny och dessutom
              fullständiga rättigheter.
            </div>
            <div
              style={{
                padding: "40px",
                background: "#00000010",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h4>Det är tack vare ER</h4>
              ...kära Landskronabor som detta blivit möjligt! Tack för ert stöd,
              för att ni troget kom till den trångbodda restaurangen och fick ta
              med pizzan hem istället för att sitta hos oss och tack igen för
              att ni nu kommer till den nya restaurangen och låter oss bjuda er
              på en riktig restaurangupplevelse.
            </div>
            <div className="change-order-mobile">
              <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
            </div>
          </Grid>
        </Wrap>
      </Sec>

      {/* <SocialSection></SocialSection> */}
    </Layout>
  )
}

export default AboutPage
