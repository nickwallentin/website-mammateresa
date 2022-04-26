import { Col, Grid, Sec, Wrap } from '../components/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import SocialSection from '../components/ui/index/socialsection';

const CateringPage = () => {
  // const data = useStaticQuery(graphql`
  //   query CateringImagesQueryASD {
  //     allFile(filter: { relativeDirectory: { eq: "catering" } }) {
  //       edges {
  //         node {
  //           id

  //           childImageSharp {
  //             fluid(
  //               maxWidth: 1200
  //               maxHeight: 500
  //               quality: 90
  //               cropFocus: CENTER
  //             ) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <Layout>
      <SEO lang='sv' title='Catering' />
      {/* <Sec>
        <Wrap>
          <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </Wrap>
      </Sec> */}

      <Sec space=' 40px 0px '>
        <Wrap>
          <h1>Lunch</h1>
          <p style={{ width: '500px', maxWidth: '95%' }}>
            Inkl. dricka, kaffe och salladsbuffé. Serveras vardagar mellan kl.
            11.00-14.00.
          </p>
          <Grid cols='1fr 1fr'>
            <div
              style={{
                background: '#00000010',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <h3>Lunch 109:-</h3>
              <ul>
                <li>Pizza Nr 3, 9, 12, 18 och 26</li>

                <li>Pasta Nr 44, 45 och 48</li>

                <li>Lasagne</li>

                <li>Canelloni med riccotaost och spenat</li>

                <li>Kycklingsallad</li>

                <li>Valfri sandwich</li>
              </ul>
            </div>
          </Grid>
        </Wrap>
      </Sec>
      {/* <SocialSection></SocialSection> */}
    </Layout>
  );
};

export default CateringPage;
